import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiMedia} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiSlider} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

import {FilmsService} from '../../films.service';

@Component({
    standalone: true,
    selector: 'lmb-film-view',
    imports: [
        FormsModule,
        TuiAppearance,
        TuiButton,
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
    protected filmsService = inject(FilmsService).filmsData;
    protected currentTime = 0;
    protected paused = true;
    protected volume = 1;

    @Input()
    public play = 0;

    @Output()
    public readonly playChange = new EventEmitter<number>();

    protected close(): void {
        this.playChange.emit(-1);
    }
}
