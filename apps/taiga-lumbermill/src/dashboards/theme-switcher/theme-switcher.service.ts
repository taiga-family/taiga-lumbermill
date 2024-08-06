import {Injectable} from '@angular/core';

interface ThemeSwitcherData {
    readonly name: string;
    readonly base_color: string;
}

export const INITIAL_DATA: ThemeSwitcherData[] = [
    {name: 'Base background', base_color: 'rgba(255, 255, 255)'},
    {name: 'Primary text', base_color: 'rgba(27, 31, 59, 1)'},
    {name: 'Secondary', base_color: 'rgba(27, 31, 59, 0.65)'},
    {name: 'Action', base_color: '#526ed3'},
    {name: 'Accent', base_color: '#ff7043'},
];

@Injectable({
    providedIn: 'root',
})
export class ThemeSwitcherService {
    public readonly themeSwitcherData = INITIAL_DATA;
}
