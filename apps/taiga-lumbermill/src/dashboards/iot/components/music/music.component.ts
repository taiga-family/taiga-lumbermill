import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiSliderComponent} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

import {MusicService} from './music.service';

@Component({
    standalone: true,
    selector: 'lmb-music',
    imports: [
        CommonModule,
        TuiAppearance,
        TuiCardLarge,
        TuiTitle,
        TuiHeader,
        TuiSliderComponent,
        FormsModule,
        ReactiveFormsModule,
        TuiIcon,
        TuiMedia,
    ],
    templateUrl: './music.component.html',
    styleUrl: './music.component.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {
    protected musicService = inject(MusicService);
}
