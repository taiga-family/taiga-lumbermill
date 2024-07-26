export interface PricesData {
    readonly id: string;
    readonly name: string;
    readonly symbol: string;
    readonly rank: string;
    readonly src: string;
    readonly priceUsd: string;
    readonly changePercent24Hr: string;
}

export interface ResponseData {
    readonly data: PricesData[];
}
