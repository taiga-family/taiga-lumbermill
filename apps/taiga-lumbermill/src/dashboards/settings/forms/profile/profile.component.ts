import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiAlertService, TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputModule,
    TuiMultiSelectModule,
    TuiSelectModule,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'lmb-profile',
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiForm,
        TuiHeader,
        TuiInputModule,
        TuiLabel,
        TuiMultiSelectModule,
        TuiSelectModule,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    private readonly alert = inject(TuiAlertService);
    protected readonly emails = ['my@example.com', 'ersatz@example.com'];

    protected readonly form = new FormGroup({
        name: new FormControl(''),
        email: new FormControl(this.emails[0]),
        bio: new FormControl(''),
        twitter: new FormControl(''),
        github: new FormControl(''),
    });

    protected submit(): void {
        this.alert
            .open(`${JSON.stringify(this.form.value)}`, {label: 'Profile updated'})
            .subscribe();
    }
}
