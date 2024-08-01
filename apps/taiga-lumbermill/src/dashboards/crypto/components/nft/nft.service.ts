import {Injectable} from '@angular/core';

export interface NFTData {
    readonly name: string;
    readonly src: string;
    readonly price: string;
}

export const INITIAL_DATA: NFTData[] = [
    {name: 'Beth', src: './nft/1.webp', price: '1 BTC'},
    {name: 'Pryor', src: './nft/2.webp', price: '1 BTC'},
    {name: 'Olea', src: './nft/3.webp', price: '1 BTC'},
    {name: 'Imogen', src: './nft/4.webp', price: '1 BTC'},
];

@Injectable({
    providedIn: 'root',
})
export class NftService {
    public readonly nftData = INITIAL_DATA;
}
