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

import {filterButtons, graphD, graphH} from './prices.constants';
import type {ResponseData} from './prices.interface';
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
    protected clicked = false;
    protected filterButtons = filterButtons;
    protected filterButton = filterButtons[0];
    protected showTokens = 4;
    protected chosen = -1;

    protected get chart(): TuiPoint[] {
        if (this.filterButton === filterButtons[0]) {
            return graphH;
        }

        return graphD;
    }

    protected filterCheck(value: string): void {
        this.filterButton = value;
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
