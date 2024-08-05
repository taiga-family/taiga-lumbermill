import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-dashboards',
    imports: [
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
    protected key$ = inject(ActivatedRoute).data;
}
