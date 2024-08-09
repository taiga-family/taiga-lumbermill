import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiButton} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';

import {FilmsService} from '../../films.service';

@Component({
    standalone: true,
    selector: 'lmb-film-view',
    imports: [FormsModule, TuiButton, TuiMedia, TuiSlider],
    templateUrl: './film-view.component.html',
    styleUrls: ['./film-view.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FilmViewComponent {
    protected filmsService = inject(FilmsService).filmsData;
    protected currentTime = 0;
    protected paused = true;
    protected volume = 1;

    @Input()
    public play = 0;
}
