import {Injectable} from '@angular/core';

interface CommonPageData {
    readonly title: string;
    readonly link: string;
    readonly description: string;
}

const INITIAL_DATA: CommonPageData[] = [
    {
        title: 'Iot Dashboard',
        link: '/dashboards/iot',
        description: 'Smart home dashboard',
    },
    {
        title: 'Crypto Dashboard',
        link: '/dashboards/crypto',
        description: 'Сrypto token dashboard',
    },
];

@Injectable({
    providedIn: 'root',
})
export class CommonPageService {
    public readonly commonPageData = INITIAL_DATA;
}
