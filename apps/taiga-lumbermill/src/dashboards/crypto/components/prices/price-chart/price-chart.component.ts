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

    protected xTargets = new Map();
    protected chart = computed(() => this.processData(this.history()));

    protected minPrice = computed(() =>
        Math.min(...(this.history() ?? []).map((val) => Number(val.priceUsd))),
    );

    protected maxPrice = computed(() =>
        Math.max(...(this.history() ?? []).map((val) => Number(val.priceUsd))),
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

    protected step(value: number): number {
        return Math.ceil(value / this.maxPoints);
    }

    protected processData(data: HistoryData[] | undefined): TuiPoint[] {
        const step = this.step((data ?? []).length);
        const fullSize: TuiPoint[] = (data ?? []).map((val, i) => [
            Math.trunc(i / step),
            Number(val.priceUsd) * (this.maxPrice() > 10 ? 1 : 100),
        ]);
        const result = fullSize.filter((_, i) => i % step === 0);

        for (let i = 0; i < (data ?? []).length; i += step) {
            const date = new Date((data ?? [])[i].date);

            this.xTargets.set(Math.trunc(i / step), date.toDateString());
        }

        return result;
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(this.maxPrice() > 10 ? y : y / 100).toLocaleString('en-US', {maximumFractionDigits: this.maxPrice() > 10 ? 0 : 2})} $`;

    protected readonly xStringify: TuiStringHandler<number> = (x) =>
        `${this.xTargets.get(x)}`;
}
