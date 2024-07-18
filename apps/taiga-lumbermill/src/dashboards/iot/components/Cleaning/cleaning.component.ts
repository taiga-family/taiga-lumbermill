import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormArray, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiButton, TuiDateFormat} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
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
    ],
    templateUrl: './cleaning.component.html',
    styleUrl: './cleaning.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleaningComponent {
    protected cleaningSevice = inject(CleaningService);
    protected readonly now = TuiDay.currentLocal();
    protected forms = new FormArray(
        this.cleaningSevice.schedule.map(
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

    protected readonly color$ = this.cleaningSevice.progress$.pipe(
        map((value) => {
            if (value < 33) {
                return '#ec5353';
            }

            if (value < 66) {
                return '#ecec53';
            }

            return '#235ad1';
        }),
    );

    protected addNew(): void {
        this.forms.push(new FormControl());
    }
}
