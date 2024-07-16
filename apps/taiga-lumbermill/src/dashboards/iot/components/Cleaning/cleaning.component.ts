import {AsyncPipe, CommonModule, isPlatformServer, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject, PLATFORM_ID} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiDateFormat} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiInputDateModule} from '@taiga-ui/legacy';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-cleaning',
    imports: [
        CommonModule,
        TuiInputDateModule,
        TuiDateFormat,
        ReactiveFormsModule,
        TuiButton,
        TuiProgress,
        NgIf,
        AsyncPipe,
    ],
    templateUrl: './cleaning.component.html',
    styleUrl: './cleaning.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CleaningComponent {
    protected readonly control = new FormControl('20-01-2024');
    protected readonly control2 = new FormControl();
    protected readonly max = 100;
    protected readonly value$ = isPlatformServer(inject(PLATFORM_ID))
        ? of(30)
        : timer(300, 200).pipe(
              map((i) => i + 30),
              startWith(30),
              takeWhile((value) => value <= this.max),
          );

    protected readonly color$ = this.value$.pipe(
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
}
