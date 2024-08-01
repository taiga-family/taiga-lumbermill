import {Injectable} from '@angular/core';

interface SwapData {
    readonly title: string;
}

export const INITIAL_DATA: SwapData[] = [{title: 'From'}, {title: 'To'}];

@Injectable({
    providedIn: 'root',
})
export class SwapService {
    public readonly swapData = INITIAL_DATA;
}
