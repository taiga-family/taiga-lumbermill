import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiDateFormat, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';
import {TuiInputDateModule} from '@taiga-ui/legacy';
import {map} from 'rxjs';

import {CleaningService} from './cleaning.service';

@Component({
    standalone: true,
    selector: 'lmb-cleaning',
    imports: [
        CommonModule,
        TuiInputDateModule,
        TuiDateFormat,
        ReactiveFormsModule,
        TuiButton,
        FormsModule,
        TuiProgress,
        NgIf,
        AsyncPipe,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
    ],
    templateUrl: './cleaning.component.html',
    styleUrl: './cleaning.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleaningComponent {
    protected cleaningService = inject(CleaningService);
    protected readonly now = TuiDay.currentLocal();
    protected forms = new FormArray(
        this.cleaningService.schedule.map(
            (item) =>
                new FormControl(
                    new TuiDay(
                        TuiDay.parseRawDateString(item.date).year,
                        TuiDay.parseRawDateString(item.date).month,
                        TuiDay.parseRawDateString(item.date).day,
                    ),
                ),
        ),
    );

    protected readonly color$ = this.cleaningService.progress$.pipe(
        map((value) => {
            if (value < 33) {
                return 'var(--tui-status-negative)';
            }

            if (value < 66) {
                return 'var(--tui-status-warning)';
            }

            return 'var(--tui-status-info)';
        }),
    );

    protected addNew(): void {
        this.forms.push(new FormControl());
    }
}
