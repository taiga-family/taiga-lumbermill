import {Injectable} from '@angular/core';

export interface NFT {
    readonly name: string;
    readonly src: string;
    readonly price: number;
    readonly tags: string[];
    readonly transactions: Transaction[];
}

export interface Transaction {
    readonly type: string;
    readonly priceUsd: number;
    readonly from: string;
    readonly to: string;
    readonly time: number;
}

export const INITIAL_DATA_TABLE: Transaction[] = [
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

export const INITIAL_DATA: NFT[] = [
    {
        name: 'Beth',
        src: './nft/1.jpg',
        price: 1,
        tags: ['Premium', 'VIP'],
        transactions: INITIAL_DATA_TABLE,
    },
    {
        name: 'Pryor',
        src: './nft/2.jpg',
        price: 2,
        tags: ['Premium', 'VIP'],
        transactions: INITIAL_DATA_TABLE,
    },
    {
        name: 'Olea',
        src: './nft/3.jpg',
        price: 3,
        tags: ['Premium', 'VIP'],
        transactions: INITIAL_DATA_TABLE,
    },
    {
        name: 'Imogen',
        src: './nft/4.jpg',
        price: 4,
        tags: ['Premium', 'VIP'],
        transactions: INITIAL_DATA_TABLE,
    },
];

@Injectable({
    providedIn: 'root',
})
export class NftService {
    public readonly nfts = INITIAL_DATA;
}
