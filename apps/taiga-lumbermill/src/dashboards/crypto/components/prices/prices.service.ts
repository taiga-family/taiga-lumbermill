import {Injectable} from '@angular/core';

interface PricesData {
    readonly name: string;
    readonly src: string;
    readonly prices: string;
    readonly dif_day: string;
}

export const INITIAL_DATA: PricesData[] = [
    {name: 'Bitcoin', src: '/crypto/bitcoin.png', prices: '65,000.08$', dif_day: '-3%'},
    {name: 'Bitcoin2', src: '/crypto/bitcoin.png', prices: '62,000.08$', dif_day: '+3%'},
    {name: 'Bitcoin3', src: '/crypto/bitcoin.png', prices: '2.21$', dif_day: '+3%'},
    {name: 'Bitcoin4', src: '/crypto/bitcoin.png', prices: '3,000.08$', dif_day: '-3%'},
];

@Injectable({
    providedIn: 'root',
})
export class PricesService {
    public readonly pricesData = INITIAL_DATA;
}
