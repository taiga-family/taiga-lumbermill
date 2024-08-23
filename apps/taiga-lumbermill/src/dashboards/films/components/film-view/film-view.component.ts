import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

import {FilmsService} from '../../films.service';

@Component({
    standalone: true,
    selector: 'lmb-film-view',
    imports: [
        FormsModule,
        RouterLink,
        TuiAppearance,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiMedia,
        TuiSlider,
        TuiTitle,
    ],
    templateUrl: './film-view.component.html',
    styleUrls: ['./film-view.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class FilmViewComponent {
    private readonly activatedRoute = inject(ActivatedRoute);
    protected id = toSignal(this.activatedRoute.params)()?.['id'];
    protected filmsService = inject(FilmsService).filmsData;
    protected currentTime = 0;
    protected paused = true;
    protected volume = 1;
}
