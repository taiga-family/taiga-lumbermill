import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    ],
    templateUrl: './music.component.html',
    styleUrl: './music.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MusicComponent {
    protected musicService = inject(MusicService).musicData;
    protected safetyForm = new FormArray(
        this.musicService.map((item) => new FormControl(item.value)),
    );
}
