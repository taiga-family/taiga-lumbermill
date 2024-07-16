import {Injectable} from '@angular/core';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiFormatNumber} from '@taiga-ui/core';

@Injectable({
    providedIn: 'root',
})
export class CostService {
    public value = [
        [1000, 8000, 4000, 3000, 4000],
        [6000, 2000, 4500, 7000, 5000],
    ];

    public labelsX = ['Jan 2021', 'Feb', 'Mar'];
    public labelsY = ['0', '10 000'];
    public appearances = ['dark', 'error'];
    public appearance = this.appearances[0];
    public hint = ({$implicit}: TuiContext<number>): string =>
        this.value
            .reduce((result, set) => `${result}$${tuiFormatNumber(set[$implicit])}\n`, '')
            .trim();
}
