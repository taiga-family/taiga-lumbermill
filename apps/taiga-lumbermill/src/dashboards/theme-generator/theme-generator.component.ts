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
import type {Params} from '@angular/router';
import {ActivatedRoute, Router} from '@angular/router';
import {WA_WINDOW} from '@ng-web-apis/common';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

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
    protected params = toSignal(this.activatedRoute.queryParams)();
    protected themeGroups = data;
    protected themeData = this.themeGroups
        .map((val) => val.colors)
        .reduce((result, value) => {
            value.forEach((val) => result.push(val));

            return result;
        }, []);

    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
    protected colors = this.themeData.map((val) => {
        const result = this.params?.[val.variable] ?? val.initialValue;

        return signal((result[0] !== 'r' && result[0] !== '#' ? '#' : '') + result);
    });

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

    protected readonly share$ = new Subject<void>();
    protected readonly iconShare = toSignal(
        this.share$.pipe(
            switchMap(() =>
                timer(2000).pipe(
                    map(() => '@tui.external-link'),
                    startWith('@tui.check'),
                ),
            ),
        ),
        {initialValue: '@tui.external-link'},
    );

    protected theme = computed(() =>
        this.colors.map((val, i) => `${this.themeData[i].variable}: ${val()};`).join(' '),
    );

    protected copy(): void {
        this.copy$.next();
        const text = `:root {${this.themeData.reduce(
            (result, value, ind) => `${result}\n${value.variable}:${this.colors[ind]()};`,
            '',
        )}\n}`;

        this.clipboard.copy(text);
    }

    protected share(): void {
        this.share$.next();

        this.clipboard.copy(this.window.location.href);
    }

    protected queryParams(): void {
        const params: Params = this.themeData.reduce(
            (result, value, ind) => ({
                ...result,
                [value.variable]: this.colors[ind]().replace('#', ''),
            }),
            {},
        );

        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: params,
            queryParamsHandling: 'merge',
        });
    }
}
