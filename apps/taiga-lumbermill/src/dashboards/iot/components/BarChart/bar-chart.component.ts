import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiAxes, TuiBarChart} from '@taiga-ui/addon-charts';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiFormatNumber, TuiHint} from '@taiga-ui/core';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'app-bar-chart',
    imports: [
        CommonModule,
        TuiAxes,
        TuiBarChart,
        TuiSelectModule,
        FormsModule,
        TuiDataListWrapper,
        TuiHint,
        TuiAxes,
    ],
    templateUrl: './bar-chart.component.html',
    styleUrl: './bar-chart.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarChartCmponent {
    protected readonly value = [
        [1000, 8000, 4000, 3000, 4000],
        [6000, 2000, 4500, 7000, 5000],
    ];

    protected readonly labelsX = ['Jan 2021', 'Feb', 'Mar'];
    protected readonly labelsY = ['0', '10 000'];
    protected readonly appearances = ['dark', 'error'];

    protected appearance = this.appearances[0];

    protected readonly hint = ({$implicit}: TuiContext<number>): string =>
        this.value
            .reduce((result, set) => `${result}$${tuiFormatNumber(set[$implicit])}\n`, '')
            .trim();
}
