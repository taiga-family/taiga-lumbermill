import {AsyncPipe, CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    input,
    signal,
} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {TuiAppearance, TuiButton, TuiHint, TuiSurface} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {map} from 'rxjs';

import type {ResponseHistoryData} from '../../../../../services/crypto.service';
import {CryptoService} from '../../../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-price-chart',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAppearance,
        TuiAvatar,
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
    protected history = computed(() =>
        this.pricesService.getHistory(this.chosen(), this.interval()),
    );

    protected xTargets = new Map();
    protected chart = computed(() =>
        this.history().pipe(map((data) => this.validateData(data))),
    );

    protected minPrice = 0;
    protected maxPrice = 0;

    protected filterButtons = ['D', 'W', 'M', 'M6', 'Y'];
    protected filterButton = signal(this.filterButtons[0]);
    protected maxPoints = 150;

    public chosen = input.required<string>();
    public interval = computed(() => this.validateInterval(this.filterButton()));

    protected toNormalView(value: number | string): string {
        return Number(value).toFixed(2);
    }

    protected step(value: number): number {
        return Math.ceil(value / this.maxPoints);
    }

    protected validateData(data: ResponseHistoryData): TuiPoint[] {
        this.minPrice = Math.min(...data.data.map((val) => Number(val.priceUsd)));
        this.maxPrice = Math.max(...data.data.map((val) => Number(val.priceUsd)));
        const step = this.step(data.data.length);
        const fullSize: TuiPoint[] = data.data.map((val, i) => [
            Math.trunc(i / step),
            Number(val.priceUsd) * (this.maxPrice > 10 ? 1 : 100),
        ]);
        const result = fullSize.filter((_, i) => i % step === 0);

        for (let i = 0; i < data.data.length; i += step) {
            const date = new Date(data.data[i].date);

            this.xTargets.set(Math.trunc(i / step), date.toDateString());
        }

        return result;
    }

    protected validateInterval(value: string): string {
        if (value === 'M') {
            return 'h1';
        }

        if (value === 'Y') {
            return 'd1';
        }

        if (value === 'D') {
            return 'm1';
        }

        if (value === 'W') {
            return 'm15';
        }

        return 'h6';
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(this.maxPrice > 10 ? y : y / 100).toLocaleString('en-US', {maximumFractionDigits: this.maxPrice > 10 ? 0 : 2})} $`;

    protected readonly xStringify: TuiStringHandler<number> = (x) =>
        `${this.xTargets.get(x)}`;
}
