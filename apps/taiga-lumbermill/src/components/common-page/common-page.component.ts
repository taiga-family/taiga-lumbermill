import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAppearance, TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiSurface} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-common-page',
    imports: [
        RouterLink,
        TuiAppearance,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLink,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonPageComponent {}
