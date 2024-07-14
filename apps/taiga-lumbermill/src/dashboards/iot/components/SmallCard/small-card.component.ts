import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
// import {TuiAccessor} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'app-small-card',
    imports: [
        TuiCell,
        TuiTitle,
        CommonModule,
        TuiCardLarge,
        TuiIcon,
        TuiHeader,
        TuiAvatar,
        TuiSurface,
        TuiAppearance,
        // TuiAccessor,
    ],
    templateUrl: './small-card.component.html',
    styleUrl: './small-card.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallCardCmponent {}
