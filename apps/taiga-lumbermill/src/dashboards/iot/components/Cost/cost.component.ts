import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAxes, TuiBarChart} from '@taiga-ui/addon-charts';
import type {TuiContext} from '@taiga-ui/cdk';
import {TuiAppearance, tuiFormatNumber, TuiHint} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiSelectModule} from '@taiga-ui/legacy';

import {CostService} from './cost.service';

@Component({
    standalone: true,
    selector: 'lmb-cost',
    imports: [
        CommonModule,
        TuiAxes,
        TuiBarChart,
        TuiSelectModule,
        FormsModule,
        TuiDataListWrapper,
        TuiHint,
        TuiAxes,
        TuiCardLarge,
        TuiAppearance,
    ],
    templateUrl: './cost.component.html',
    styleUrl: './cost.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CostComponent {
    protected costService = inject(CostService).costData;
    protected hint = ({$implicit}: TuiContext<number>): string =>
        this.costService.value
            .reduce((result, set) => `${result}$${tuiFormatNumber(set[$implicit])}\n`, '')
            .trim();
}
