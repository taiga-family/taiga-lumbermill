/* eslint-disable no-restricted-globals */
import {Clipboard} from '@angular/cdk/clipboard';
import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    signal,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';

import {ThemeExampleComponent} from './theme-example/theme-example.component';
import {data} from './theme-generator.constants';

@Component({
    standalone: true,
    selector: 'lmb-theme-generator',
    imports: [
        CommonModule,
        FormsModule,
        ThemeExampleComponent,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiInputColorModule,
        TuiTitle,
    ],
    templateUrl: './theme-generator.component.html',
    styleUrl: './theme-generator.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeGeneratorComponent {
    private readonly clipboard = inject(Clipboard);
    private readonly activatedRoute = inject(ActivatedRoute);
    protected readonly url = location.href;
    protected params = toSignal(this.activatedRoute.queryParams)();
    protected themeData = data;
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected colors = this.themeData.map((val) => {
        const result = this.params?.[val.variable] ?? val.initialValue;

        return signal((result[0] !== 'r' && result[0] !== '#' ? '#' : '') + result);
    });

    protected copied = signal(false);
    protected shared = signal(false);

    protected theme = computed(() =>
        this.colors.map((val, i) => `${this.themeData[i].variable}: ${val()};`).join(' '),
    );

    protected copy(): void {
        this.copied.set(true);
        setTimeout(() => {
            this.copied.set(false);
        }, 800);
        let text = ':root {';

        for (let i = 0; i < this.themeData.length; i++) {
            text += `\n${this.themeData[i].variable}: ${this.colors[i]()};`;
        }

        text += '\n}';
        this.clipboard.copy(text);
    }

    protected share(): void {
        this.shared.set(true);
        setTimeout(() => {
            this.shared.set(false);
        }, 800);
        let text = '?';

        for (let i = 0; i < this.themeData.length; i++) {
            text += `${this.themeData[i].variable}=${this.colors[i]().replace('#', '')}&`;
        }

        this.clipboard.copy(this.url + text);
    }
}
