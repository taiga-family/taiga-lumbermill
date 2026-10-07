import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
    TuiButton,
    TuiDropdown,
    TuiInput,
    TuiLabel,
    TuiNotificationService,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiDataListWrapper,
    TuiMultiSelect,
    TuiSelect,
    TuiTextarea,
} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-profile',
    imports: [
        ReactiveFormsModule,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiLabel,
        TuiMultiSelect,
        TuiSelect,
        TuiTextarea,
        TuiTitle,
    ],
    templateUrl: './profile.component.html',
    styleUrl: './profile.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileComponent {
    private readonly alert = inject(TuiNotificationService);
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
