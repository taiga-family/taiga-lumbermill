import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiSegmented} from '@taiga-ui/kit';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-settings',
    imports: [
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TuiHeader,
        TuiIcon,
        TuiNavigation,
        TuiSegmented,
        TuiTitle,
    ],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SettingsComponent {}
