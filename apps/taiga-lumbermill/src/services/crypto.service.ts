import {HttpClient} from '@angular/common/http';
import {inject, Injectable, InjectionToken} from '@angular/core';
import {map, type Observable} from 'rxjs';

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

export const CryptoApi = new InjectionToken('', {
    factory: () => 'https://api.coincap.io/v2/assets',
});
@Injectable({
    providedIn: 'root',
})
export class CryptoService {
    private readonly http = inject(HttpClient);

    private readonly API = inject(CryptoApi);

    public getTokens(): Observable<PricesData[]> {
        return this.http.get<ResponseData>(this.API).pipe(map((info) => info.data));
    }

    public getHistory(id: string, interval: string): Observable<HistoryData[]> {
        return this.http
            .get<ResponseHistoryData>(`${this.API}/${id}/history`, {
                params: {
                    interval,
                },
            })
            .pipe(map((history) => history.data));
    }
}
