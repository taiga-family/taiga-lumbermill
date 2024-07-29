import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

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

@Injectable({
    providedIn: 'root',
})
export class CryptoService {
    private readonly http = inject(HttpClient);
    private readonly API = 'https://api.coincap.io/v2/assets';
    public info$: Observable<ResponseData> = this.getTokens();

    public getTokens(): Observable<ResponseData> {
        return this.http.get<ResponseData>(this.API);
    }

    public getHistory(id: string, interval: string): Observable<ResponseHistoryData> {
        return this.http.get<ResponseHistoryData>(`${this.API}/${id}/history`, {
            params: {
                interval,
            },
        });
    }
}
