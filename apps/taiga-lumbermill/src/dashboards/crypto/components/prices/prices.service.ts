import {HttpClient} from '@angular/common/http';
import {inject, Injectable} from '@angular/core';
import type {Observable} from 'rxjs';

import type {ResponseData, ResponseHistoryData} from './prices.interface';

@Injectable({
    providedIn: 'root',
})
export class PricesService {
    private readonly http = inject(HttpClient);
    private readonly API = 'https://api.coincap.io/v2/assets';

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
