import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiAlertService, TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiBlock, TuiRadio} from '@taiga-ui/kit';
import {TuiForm, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputModule,
    TuiInputNumberModule,
    TuiMultiSelectModule,
    TuiSelectModule,
    TuiTextareaModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    selector: 'lmb-notifications',
    imports: [
        ReactiveFormsModule,
        TuiBlock,
        TuiButton,
        TuiForm,
        TuiHeader,
        TuiInputModule,
        TuiInputNumberModule,
        TuiMultiSelectModule,
        TuiRadio,
        TuiSelectModule,
        TuiTextareaModule,
        TuiTextfieldControllerModule,
        TuiTitle,
    ],
    templateUrl: './appearance.component.html',
    styleUrl: './appearance.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppearanceComponent {
    private readonly alert = inject(TuiAlertService);
    protected fonts = ['Manrope', 'Roboto', 'System'] as const;

    protected readonly form = new FormGroup({
        font: new FormControl(this.fonts[0]),
        fontSize: new FormControl(16),
        theme: new FormControl('light'),
    });

    protected submit(): void {
        this.alert
            .open(`${JSON.stringify(this.form.value)}`, {label: 'Appearance updated'})
            .subscribe();
    }
}
