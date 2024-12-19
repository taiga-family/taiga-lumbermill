import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiLogoComponent, TuiNavigation} from '@taiga-ui/layout';
import {filter, map, startWith} from 'rxjs';

interface CardData {
    readonly title: string;
    readonly link: string;
    readonly description: string;
}

const LIST: {Dashboards: CardData[]; Pages: CardData[]} = {
    Dashboards: [
        {
            title: 'Iot Dashboard',
            link: '/dashboards/iot',
            description: 'Smart home dashboard',
        },
        {
            title: 'Crypto Dashboard',
            link: '/dashboards/crypto',
            description: 'Crypto token dashboard',
        },
    ],
    Pages: [
        {
            title: 'Login',
            link: '/pages/login',
            description: 'Ready to use login page',
        },
        {
            title: 'Sign up',
            link: '/pages/login',
            description: 'Ready to use registration page',
        },
    ],
};

@Component({
    standalone: true,
    selector: 'lmb-dashboards-list',
    imports: [
        CommonModule,
        RouterLink,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiLogoComponent,
        TuiNavigation,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './list.component.html',
    styleUrl: './list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListComponent {
    protected readonly router = inject(Router);
    protected readonly type = toSignal(
        this.router.events.pipe(
            filter((event) => event instanceof NavigationEnd),
            startWith(null),
            map(() => (this.router.url.includes('dashboards') ? 'Dashboards' : 'Pages')),
        ),
    );

    protected readonly list = computed(() => LIST[this.type() ?? 'Pages']);
}
