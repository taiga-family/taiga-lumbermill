import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import type {TuiStringHandler} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {
    TuiAppearance,
    TuiButton,
    TuiHint,
    TuiIcon,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';

import type {ResponseHistoryData} from '../../../../services/crypto.service';
import {CryptoService} from '../../../../services/crypto.service';
import {filterButtons, maxPoints} from './prices.constants';

@Component({
    standalone: true,
    selector: 'lmb-prices',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiAxes,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiHint,
        TuiIcon,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './prices.component.html',
    styleUrl: './prices.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
    protected pricesService = inject(CryptoService);
    protected info$ = this.pricesService.info$;
    protected history$: Observable<ResponseHistoryData> | null = null;
    protected xTargets = new Map();
    protected chart: TuiPoint[] = [];

    protected minPrice = 1;
    protected maxPrice = 0;
    protected clicked = false;
    protected filterButtons = filterButtons;
    protected filterButton = filterButtons[0];
    protected showTokens = 4;
    protected chosen = '';

    protected step(value: number): number {
        return Math.ceil(value / maxPoints);
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

    protected newGraph(id: string): void {
        this.history$ = this.pricesService.getHistory(
            id,
            this.validateInterval(this.filterButton),
        );
        this.history$.subscribe((history) => {
            this.chart = this.validateData(history);
        });
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
        this.filterButton = value;
        this.newGraph(this.chosen);
    }

    protected toNormalView(value: number | string): string {
        return Number(value).toFixed(2);
    }

    protected addToken(): void {
        this.showTokens += 1;
    }

    protected chooseToken(value: string): void {
        this.clicked = !this.clicked;
        this.chosen = value;
        this.newGraph(this.chosen);
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${(this.maxPrice > 10 ? y : y / 100).toLocaleString('en-US', {maximumFractionDigits: this.maxPrice > 10 ? 0 : 2})} $`;

    protected readonly xStringify: TuiStringHandler<number> = (x) =>
        `${this.xTargets.get(x)}`;
}
