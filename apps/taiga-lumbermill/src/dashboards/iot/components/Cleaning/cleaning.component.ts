import {AsyncPipe, CommonModule, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButton, TuiDateFormat} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiInputDateModule} from '@taiga-ui/legacy';

import {CleaningService} from '../../data/services/cleaning.service';

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
    protected data = inject(CleaningService);
}
