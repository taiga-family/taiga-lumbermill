import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiAppearance, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-common-page',
    imports: [
        CommonModule,
        RouterLink,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './common-page.component.html',
    styleUrl: './common-page.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommonPageComponent {}
