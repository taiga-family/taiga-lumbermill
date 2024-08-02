import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
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

import {CryptoService} from '../../../../services/crypto.service';
import {PriceChartComponent} from './price-chart/price-chart.component';
import {PriceListComponent} from './price-list/price-list.component';

@Component({
    standalone: true,
    selector: 'lmb-prices',
    imports: [
        AsyncPipe,
        CommonModule,
        PriceChartComponent,
        PriceListComponent,
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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
    protected pricesService = inject(CryptoService);
    protected token = '';

    protected changeValue(value: string): void {
        this.token = value;
    }
}
