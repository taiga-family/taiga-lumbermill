import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation, TuiSurface} from '@taiga-ui/layout';
import {filter, map, startWith} from 'rxjs';

interface CardData {
    readonly title: string;
    readonly link: string;
    readonly description: string;
}

type ListType = 'Apps' | 'Dashboards' | 'Pages';

const LIST: Record<ListType, CardData[]> = {
    Apps: [
        {
            title: 'AI Chat',
            link: '/apps/ai-chat',
            description: 'Chat with an AI assistant: history, model picker and prompts',
        },
    ],
    Dashboards: [
        {
            title: 'Settings page',
            link: '/dashboards/settings',
            description: 'Various forms of user settings',
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
            link: '/pages/sign-up',
            description: 'Ready to use registration page',
        },
    ],
};

@Component({
    standalone: true,
    selector: 'lmb-dashboards-list',
    imports: [
        RouterLink,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
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
            map((): ListType => {
                if (this.router.url.includes('dashboards')) {
                    return 'Dashboards';
                }

                return this.router.url.includes('apps') ? 'Apps' : 'Pages';
            }),
        ),
    );

    protected readonly list = computed(() => LIST[this.type() ?? 'Pages']);
}
