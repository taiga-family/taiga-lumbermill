import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {TuiAppearance, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TUI_DEFAULT_INPUT_COLORS, TuiInputColorModule} from '@taiga-ui/legacy';

import {INITIAL_DATA} from '../dashboards-list/dashboards-list.component';

@Component({
    standalone: true,
    selector: 'lmb-common-page',
    imports: [
        CommonModule,
        FormsModule,
        RouterLink,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiInputColorModule,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonPageComponent {
    protected readonly dashboardsListData = INITIAL_DATA;
    protected readonly exampleColor = '#fff';
    protected readonly palette = TUI_DEFAULT_INPUT_COLORS;
}
