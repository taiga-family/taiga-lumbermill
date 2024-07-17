import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

import {ControlPanelService} from '../../data/services/control-panel.service';

@Component({
    standalone: true,
    selector: 'lmb-small-card',
    imports: [
        CommonModule,
        TuiCell,
        TuiTitle,
        TuiCardLarge,
        TuiIcon,
        TuiHeader,
        TuiAvatar,
        TuiSurface,
        TuiAppearance,
    ],
    templateUrl: './control-panel.component.html',
    styleUrl: './control-panel.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlPanelComponent {
    protected data = inject(ControlPanelService);
}
