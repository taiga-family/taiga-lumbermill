import {AsyncPipe, CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {TuiAppearance, TuiButton, TuiHint, TuiSurface} from '@taiga-ui/core';
import {combineLatest, switchMap} from 'rxjs';

import type {HistoryData} from '../../../../../services/crypto.service';
import {CryptoService} from '../../../../../services/crypto.service';
import {INTERVALS} from './price-chart.constant';

@Component({
    standalone: true,
    selector: 'lmb-price-chart',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAmountPipe,
        TuiAppearance,
        TuiAxes,
        TuiButton,
        TuiHint,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiSurface,
    ],
    templateUrl: './price-chart.component.html',
    styleUrl: './price-chart.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceChartComponent {
    protected pricesService = inject(CryptoService);

    protected step = computed(() =>
        Math.ceil((this.history() ?? []).length / this.maxPoints),
    );

    protected xTargets = computed(
        () =>
            new Map(
                (this.history() ?? []).map((val, i) => [
                    Math.trunc(i / this.step()),
                    new Date(val.date).toDateString(),
                ]),
            ),
    );

    protected chart = computed(() => this.processData(this.history()));

    protected minPrice = computed(
        () => Math.min(...(this.history() ?? []).map((val) => Number(val.priceUsd))) || 0,
    );

    protected maxPrice = computed(
        () => Math.max(...(this.history() ?? []).map((val) => Number(val.priceUsd))) || 0,
    );

    protected filterButtons = ['D', 'W', 'M', 'M6', 'Y'];
    protected filterButton = signal(this.filterButtons[0]);
    protected maxPoints = 150;

    public token = input.required<string>();
    public interval = computed(() => INTERVALS[this.filterButton()]);
    public history = toSignal(
        combineLatest([toObservable(this.token), toObservable(this.interval)]).pipe(
            switchMap(([token, interval]) =>
                this.pricesService.getHistory(token, interval),
            ),
        ),
    );

    protected processData(data: HistoryData[] | undefined): TuiPoint[] {
        const fullSize: TuiPoint[] = (data ?? []).map((val, i) => [
            Math.trunc(i / this.step()),
            Number(val.priceUsd) * (this.maxPrice() > 10 ? 1 : 100),
        ]);

        return fullSize.filter((_, i) => i % this.step() === 0);
    }

    protected checkInfinity(value: number): boolean {
        return Number.isFinite(value);
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(this.maxPrice() > 10 ? y : y / 100).toLocaleString('en-US', {maximumFractionDigits: this.maxPrice() > 10 ? 0 : 2})} $`;

    protected readonly xStringify: TuiStringHandler<number> = (x) =>
        `${this.xTargets().get(x)}`;
}
