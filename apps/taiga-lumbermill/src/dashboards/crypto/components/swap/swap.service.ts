import {Injectable} from '@angular/core';

interface SwapData {
    readonly title: string;
    status: boolean;
    chosen: string;
}

export const INITIAL_DATA: SwapData[] = [
    {title: 'From', status: false, chosen: 'eth'},
    {title: 'To', status: false, chosen: 'btc'},
];

@Injectable({
    providedIn: 'root',
})
export class SwapService {
    public readonly swapData = INITIAL_DATA;
}
