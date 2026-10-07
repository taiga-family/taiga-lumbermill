import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {
    TuiButton,
    TuiDropdown,
    TuiInput,
    TuiNotificationService,
    TuiRadio,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiBlock,
    TuiChevron,
    TuiDataListWrapper,
    TuiInputNumber,
    TuiMultiSelect,
    TuiSelect,
    TuiTextarea,
} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-notifications',
    imports: [
        ReactiveFormsModule,
        TuiBlock,
        TuiButton,
        TuiChevron,
        TuiDataListWrapper,
        TuiDropdown,
        TuiForm,
        TuiHeader,
        TuiInput,
        TuiInputNumber,
        TuiMultiSelect,
        TuiRadio,
        TuiSelect,
        TuiTextarea,
        TuiTitle,
    ],
    templateUrl: './appearance.component.html',
    styleUrl: './appearance.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppearanceComponent {
    private readonly alert = inject(TuiNotificationService);

    protected fonts = ['Manrope', 'Roboto', 'System'] as const;

    protected readonly form = new FormGroup({
        font: new FormControl(this.fonts[0]),
        fontSize: new FormControl(16),
        theme: new FormControl('light'),
    });

    protected submit(): void {
        this.alert
            .open(JSON.stringify(this.form.value), {label: 'Appearance updated'})
            .subscribe();
    }
}
