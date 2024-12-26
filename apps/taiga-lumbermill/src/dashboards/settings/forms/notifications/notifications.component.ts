import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiAlertService, TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBlock, TuiCheckbox} from '@taiga-ui/kit';
import {TuiCell, TuiForm, TuiHeader} from '@taiga-ui/layout';
import {
    TuiInputModule,
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
        TuiAvatar,
        TuiBlock,
        TuiButton,
        TuiCell,
        TuiCheckbox,
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
    templateUrl: './notifications.component.html',
    styleUrl: './notifications.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
    private readonly alert = inject(TuiAlertService);
    protected items = [
        {
            title: 'watch',
            description: 'You will receive notifications for any activity',
            icon: '@tui.eye',
        },
        {
            title: 'participate',
            description:
                'You will only receive notifications for items you have participated in',
            icon: '@tui.user',
        },
        {
            title: 'mention',
            description:
                'You will receive notifications only for comments in which you were  @mentioned',
            icon: '@tui.at-sign',
        },
    ] as const;

    protected readonly form = new FormGroup({
        level: new FormControl(this.items[0]),
        marketing: new FormControl(false),
        social: new FormControl(false),
        security: new FormControl(true),
    });

    protected submit(): void {
        this.alert
            .open(`${JSON.stringify(this.form.value)}`, {label: 'Profile updated'})
            .subscribe();
    }
}
