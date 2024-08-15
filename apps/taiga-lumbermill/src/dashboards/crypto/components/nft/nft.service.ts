import {Injectable} from '@angular/core';

export interface NFTData {
    readonly name: string;
    readonly src: string;
    readonly price: number;
    readonly tags: string[];
}

export const INITIAL_DATA: NFTData[] = [
    {name: 'Beth', src: './nft/1.jpg', price: 1, tags: ['Premium', 'VIP']},
    {name: 'Pryor', src: './nft/2.jpg', price: 2, tags: ['Premium', 'VIP']},
    {name: 'Olea', src: './nft/3.jpg', price: 3, tags: ['Premium', 'VIP']},
    {name: 'Imogen', src: './nft/4.jpg', price: 4, tags: ['Premium', 'VIP']},
];

export interface NFTTABLE {
    readonly type: string;
    readonly priceUsd: number;
    readonly from: string;
    readonly to: string;
    readonly time: number;
}

export const INITIAL_DATA_TABLE: NFTTABLE[] = [
    {
        type: 'Putting up for sale',
        priceUsd: 2,
        from: 'UQDYzZ...inf4K',
        to: '-',
        time: 1222222222233,
    },
    {
        type: 'Sale',
        priceUsd: 2,
        from: 'UQDYzZ...inf4K',
        to: 'UQGGxX...ilf3A',
        time: 1500231542231,
    },
    {
        type: 'Putting up for sale',
        priceUsd: 5,
        from: 'UQGGxX...ilf3A',
        to: '-',
        time: 1712412323429,
    },
    {
        type: 'Sale',
        priceUsd: 5,
        from: 'UQGGxX...ilf3A',
        to: 'UQDYzZ...inf4K',
        time: 1712482323429,
    },
];

@Injectable({
    providedIn: 'root',
})
export class NftService {
    public readonly nftData = INITIAL_DATA;
    public readonly nftTable = INITIAL_DATA_TABLE;
}
