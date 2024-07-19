import {Injectable} from '@angular/core';

interface CostData {
    readonly value: number[][];
    readonly labelsX: string[];
    readonly labelsY: string[];
}

const INITIAL_DATA: CostData = {
    value: [
        [1000, 8000, 4000, 3000, 4000],
        [6000, 2000, 4500, 7000, 5000],
    ],
    labelsX: ['Jan 2021', 'Feb', 'Mar'],
    labelsY: ['0', '10 000'],
};

@Injectable({
    providedIn: 'root',
})
export class CostService {
    public readonly costData = INITIAL_DATA;
}
