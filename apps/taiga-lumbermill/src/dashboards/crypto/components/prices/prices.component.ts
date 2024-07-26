import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import type {TuiContext, TuiStringHandler} from '@taiga-ui/cdk';
import {TuiFilterPipe, TuiMapperPipe} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {TuiAppearance, TuiHint, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';

import {filterButtons, maxPoints} from './prices.constants';
import type {ResponeHistoryData, ResponseData} from './prices.interface';
import {PricesService} from './prices.service';

@Component({
    standalone: true,
    selector: 'lmb-prices',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiAxes,
        TuiCardLarge,
        TuiCell,
        TuiFilterPipe,
        TuiHeader,
        TuiHint,
        TuiIcon,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiMapperPipe,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './prices.component.html',
    styleUrl: './prices.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
    protected pricesService = inject(PricesService);
    protected info$: Observable<ResponseData> = this.pricesService.getTokens();
    protected history$: Observable<ResponeHistoryData> = this.pricesService.getHistory(
        'bitcoin',
        'h1',
    );

    protected uniquePrices = 0;
    protected minPrice = 10000000000;
    protected maxPrice = 0;
    protected clicked = false;
    protected filterButtons = filterButtons;
    protected filterButton = filterButtons[0];
    protected showTokens = 4;
    protected chosen = -1;

    protected step(value: number): number {
        return Math.ceil(value / maxPoints);
    }

    protected validateData(data: ResponeHistoryData): TuiPoint[] {
        const map = new Map();
        const result = [];
        const step = this.step(data.data.length);
        let count = 0;

        for (let i = 0; i < data.data.length; i += step) {
            const value: TuiPoint = [i, Number(data.data[i].priceUsd)];

            result.push(value);

            if (!map.has(Number(data.data[i].priceUsd))) {
                count += 1;
                map.set(Number(data.data[i].priceUsd), 1);
                this.minPrice = Math.min(this.minPrice, Number(data.data[i].priceUsd));
                this.maxPrice = Math.max(this.maxPrice, Number(data.data[i].priceUsd));
            }
        }

        this.uniquePrices = count;

        return result;
    }

    protected filterCheck(value: string): void {
        this.filterButton = value;
    }

    protected toNormalView(value: number | string): string {
        return Number(value).toFixed(2);
    }

    protected addToken(): void {
        this.showTokens += 1;
    }

    protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({$implicit}) =>
        `Price: ${$implicit[1]}$`;

    protected chooseToken(value: number): void {
        this.clicked = !this.clicked;
        this.chosen = value;
    }
}
