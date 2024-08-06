import {Injectable} from '@angular/core';

interface ThemeSwitcherData {
    readonly name: string;
    // readonly base_color: string;
}

export const INITIAL_DATA: ThemeSwitcherData[] = [
    {name: 'Primary text'},
    {name: 'Primary text'},
    {name: 'Primary text'},
    {name: 'Primary text'},
    {name: 'Primary text'},
];

@Injectable({
    providedIn: 'root',
})
export class ThemeSwitcherService {
    public readonly themeSwitcherData = INITIAL_DATA;
}
