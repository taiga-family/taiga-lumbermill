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
import {ActivatedRoute, Router} from '@angular/router';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

import {ShareButtonComponent} from './share-button/share-button.component';
import {ThemeExampleComponent} from './theme-example/theme-example.component';
import {theme} from './theme-generator.constants';

@Component({
    standalone: true,
    selector: 'lmb-theme-generator',
    imports: [
        CommonModule,
        FormsModule,
        ShareButtonComponent,
        ThemeExampleComponent,
        TuiAppearance,
        TuiButton,
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
    private readonly router = inject(Router);
    private readonly clipboard = inject(Clipboard);
    private readonly activatedRoute = inject(ActivatedRoute);
    private readonly window = inject(WA_WINDOW);
    protected readonly params = toSignal(this.activatedRoute.queryParams)();
    protected readonly themeGroups = theme;
    protected readonly themeData = theme.map((val) => val.colors);

    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected readonly colors = this.themeData.map((group) =>
        group.map((value) => {
            const result = this.params?.[value.variable] ?? value.initialValue;

            return signal((result[0] !== 'r' && result[0] !== '#' ? '#' : '') + result);
        }),
    );

    protected readonly copy$ = new Subject<void>();
    protected readonly iconCopy = toSignal(
        this.copy$.pipe(
            switchMap(() =>
                timer(2000).pipe(
                    map(() => '@tui.copy'),
                    startWith('@tui.check'),
                ),
            ),
        ),
        {initialValue: '@tui.copy'},
    );

    protected theme = computed(() =>
        this.colors
            .map((group, i) =>
                group
                    .map((value, j) => `${this.themeData[i][j].variable}: ${value()};`)
                    .join(' '),
            )
            .join(' '),
    );

    protected copy(): void {
        this.copy$.next();
        const text = `:root {${this.themeData.map((value, i) =>
            value.reduce(
                (result, value, j) =>
                    `${result}\n${value.variable}:${this.colors[i][j]()};`,
                '',
            ),
        )})\n}`;

        this.clipboard.copy(text);
    }

    protected share(): void {
        this.clipboard.copy(this.window.location.href);
    }

    protected updateQueryParams(): void {
        const params = this.themeData
            .map((value, i) =>
                value.reduce(
                    (result, value, j) => ({
                        ...result,
                        [value.variable]: this.colors[i][j]().replace('#', ''),
                    }),
                    {},
                ),
            )
            .reduce((acc, curr) => ({...acc, ...curr}), {});

        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: params,
            queryParamsHandling: 'merge',
        });
    }
}
