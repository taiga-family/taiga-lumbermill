import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

import {CommonPageService} from './common-page.service';

@Component({
    standalone: true,
    selector: 'lmb-common-page',
    imports: [
        CommonModule,
        RouterLink,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiIcon,
        TuiNavigation,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonPageComponent {
    protected commonPageService = inject(CommonPageService).commonPageData;
}
