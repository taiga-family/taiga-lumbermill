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

import {grapgD, grapgH} from './prices.constants';
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
    protected pricesService = inject(PricesService).pricesData;
    protected clicked = false;
    protected readonly filterButtons = ['H', 'D', 'M', '6M', 'Y'];
    protected filterButton = this.filterButtons[0];
    protected choosen = -1;

    protected get chart(): TuiPoint[] {
        if (this.filterButton === this.filterButtons[0]) {
            return grapgH;
        }

        return grapgD;
    }

    protected filterCheck(value: string): void {
        this.filterButton = value;
    }

    protected readonly hint: TuiStringHandler<TuiContext<TuiPoint>> = ({$implicit}) =>
        `Price: ${$implicit[1]}$`;

    protected chooseToken(value: number): void {
        this.clicked = !this.clicked;
        this.choosen = value;
    }
}
