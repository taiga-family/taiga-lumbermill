import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
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
        TuiButton,
        TuiAppearance,
    ],
    templateUrl: './music.component.html',
    styleUrl: './music.component.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {
    protected musicService = inject(MusicService);
}
