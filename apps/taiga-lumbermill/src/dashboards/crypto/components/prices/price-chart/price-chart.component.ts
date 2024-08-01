import {AsyncPipe, CommonModule} from '@angular/common';
import type {OnInit} from '@angular/core';
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
import type {Observable} from 'rxjs';

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
export class PriceChartComponent implements OnInit {
    protected pricesService = inject(CryptoService);
    protected history$: Observable<ResponseHistoryData> | null = null;
    protected history = computed(() =>
        this.pricesService.getHistory(this.chosen(), this.interval()),
    );

    protected xTargets = new Map();
    protected chart: TuiPoint[] = [];

    protected minPrice = 1;
    protected maxPrice = 0;

    protected filterButtons = ['D', 'W', 'M', 'M6', 'Y'];
    protected filterButton = signal(this.filterButtons[0]);
    protected maxPoints = 150;

    // @Input()
    // public chosen = '';
    public chosen = input.required<string>();
    public interval = computed(() => this.validateInterval(this.filterButton()));

    public ngOnInit(): void {
        this.newGraph(this.chosen());
    }

    // protected get interval(): string {
    //     return this.validateInterval(this.filterButton);
    // }

    protected toNormalView(value: number | string): string {
        return Number(value).toFixed(2);
    }

    protected newGraph(id: string): void {
        // console.log(history);
        this.history$ = this.pricesService.getHistory(id, this.interval());
        this.history$.subscribe((history) => {
            this.chart = this.validateData(history);
        });
    }

    protected step(value: number): number {
        return Math.ceil(value / this.maxPoints);
    }

    protected validateData(data: ResponseHistoryData): TuiPoint[] {
        this.minPrice = 1;
        this.maxPrice = 0;
        const map = new Map();
        const result = [];
        const step = this.step(data.data.length);

        for (let i = 0; i < data.data.length; i += step) {
            if (!map.has(Number(data.data[i].priceUsd))) {
                map.set(Number(data.data[i].priceUsd), 1);

                if (i === 0) {
                    this.minPrice = Number(data.data[i].priceUsd);
                } else {
                    this.minPrice = Math.min(
                        this.minPrice,
                        Number(data.data[i].priceUsd),
                    );
                }

                this.maxPrice = Math.max(this.maxPrice, Number(data.data[i].priceUsd));
            }
        }

        for (let i = 0; i < data.data.length; i += step) {
            const date = new Date(data.data[i].date);

            this.xTargets.set(i, date.toDateString());
            const value: TuiPoint = [
                i,
                Number(data.data[i].priceUsd) * (this.maxPrice > 10 ? 1 : 100),
            ];

            result.push(value);
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

    protected filterCheck(value: string): void {
        this.filterButton.set(value);
        this.newGraph(this.chosen());
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(this.maxPrice > 10 ? y : y / 100).toLocaleString('en-US', {maximumFractionDigits: this.maxPrice > 10 ? 0 : 2})} $`;

    protected readonly xStringify: TuiStringHandler<number> = (x) =>
        `${this.xTargets.get(x)}`;
}
