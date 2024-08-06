import {Injectable} from '@angular/core';

interface ThemeSwitcherData {
    readonly name: string;
    readonly base_color: string;
    readonly property: string;
}

export const INITIAL_DATA: ThemeSwitcherData[] = [
    {
        name: 'Base background',
        base_color: 'rgba(255, 255, 255)',
        property: '--tui-background-base',
    },
    {
        name: 'Primary text',
        base_color: 'rgba(27, 31, 59, 1)',
        property: '--tui-text-primary',
    },
    {
        name: 'Secondary',
        base_color: 'rgba(27, 31, 59, 0.65)',
        property: '--tui-text-secondary',
    },
    {name: 'Action', base_color: '#526ed3', property: '--tui-text-action'},
    {name: 'Accent', base_color: '#ff7043', property: '--tui-background-accent-2'},
];

@Injectable({
    providedIn: 'root',
})
export class ThemeSwitcherService {
    public readonly themeSwitcherData = INITIAL_DATA;
}
