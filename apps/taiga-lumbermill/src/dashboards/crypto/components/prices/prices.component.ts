import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiTitle} from '@taiga-ui/core';
import {TuiSkeleton} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {CryptoService} from '../../services/crypto.service';
import {PriceChartComponent} from './price-chart/price-chart.component';
import {PriceListComponent} from './price-list/price-list.component';

@Component({
    standalone: true,
    selector: 'lmb-prices',
    imports: [
        CommonModule,
        PriceChartComponent,
        PriceListComponent,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiSkeleton,
        TuiTitle,
    ],
    templateUrl: './prices.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
    protected pricesService = inject(CryptoService);
    protected tokens$ = this.pricesService.getTokens();
    protected token = '';
}
