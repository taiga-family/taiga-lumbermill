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

export interface HistoryData {
    readonly priceUsd: string;
    readonly time: number;
    readonly date: string;
}

export interface ResponseHistoryData {
    readonly data: HistoryData[];
}
