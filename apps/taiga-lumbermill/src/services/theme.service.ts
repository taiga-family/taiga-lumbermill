import {inject, Injectable} from '@angular/core';
import {LOCAL_STORAGE} from '@ng-web-apis/common';
import {tuiCreateToken} from '@taiga-ui/cdk';

export const TUI_THEME_KEY = tuiCreateToken('data-tui-theme');

@Injectable({
    providedIn: 'root',
})
export class ThemeService {
    private readonly storage = inject(LOCAL_STORAGE);
    private readonly key = inject(TUI_THEME_KEY);
    public themes = ['light', 'dark'];

    public get theme(): string {
        const value = this.storage.getItem(this.key);

        if (value === null) {
            this.storage.setItem(this.key, 'light');

            return 'light';
        }

        return value;
    }

    public set theme(theme: string) {
        this.storage.setItem(this.key, theme);
    }
}
