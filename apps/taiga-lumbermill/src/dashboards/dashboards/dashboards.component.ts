import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import {filter, map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'lmb-dashboards',
    imports: [
        AsyncPipe,
        CommonModule,
        RouterLink,
        RouterOutlet,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiIcon,
        TuiNavigation,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './dashboards.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardsComponent {
    protected data$ = inject(Router).events.pipe(
        filter((e): e is ActivationEnd => e instanceof ActivationEnd),
        map((event) => event.snapshot.firstChild?.data['title']),
    );
}
