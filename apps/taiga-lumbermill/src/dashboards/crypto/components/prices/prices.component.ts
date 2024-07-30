import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import type {
    TuiContext,
    TuiFilterPipe,
    TuiMapperPipe,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {TuiAppearance, TuiHint, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
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
    protected pricesService = inject(CryptoService);
    protected info$ = this.pricesService.info$;
    protected history$: Observable<ResponseHistoryData> | null = null;

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
            const value: TuiPoint = [i, Number(data.data[i].priceUsd)];

            result.push(value);

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

        return result;
    }

    protected newGraph(id: string): void {
        this.history$ = this.pricesService.getHistory(
            id,
            this.validateInterval(this.filterButton),
        );
    }

    protected validateInterval(value: string): string {
        if (value === 'H') {
            return 'h1';
        }

        if (value === 'D') {
            return 'd1';
        }

        if (value === 'M') {
            return 'm1';
        }

        if (value === 'M6') {
            return 'm5';
        }

        return 'm15';
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

    protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({$implicit}) =>
        `Price: ${$implicit[1]}$`;

    protected chooseToken(value: string): void {
        this.clicked = !this.clicked;
        this.chosen = value;
        this.newGraph(this.chosen);
    }

    protected readonly yStringify: TuiStringHandler<number> = (y) =>
        `${y.toLocaleString('en-US', {maximumFractionDigits: 0})} $`;
}
