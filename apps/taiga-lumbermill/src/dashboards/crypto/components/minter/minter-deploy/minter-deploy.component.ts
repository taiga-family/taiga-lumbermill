import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {TuiAutoFocus, tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiButton, TuiDialog, TuiError, TuiHint} from '@taiga-ui/core';
import {
    TUI_VALIDATION_ERRORS,
    TuiAvatar,
    TuiFieldErrorPipe,
    TuiPushService,
} from '@taiga-ui/kit';
import {TuiCell} from '@taiga-ui/layout';
import {TuiInputModule, TuiInputNumberModule} from '@taiga-ui/legacy';
import {of} from 'rxjs';

import type {TokenMinter} from '../minter.component';

@Component({
    standalone: true,
    selector: 'lmb-minter-deploy',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAutoFocus,
        TuiAvatar,
        TuiButton,
        TuiCell,
        TuiDialog,
        TuiError,
        TuiFieldErrorPipe,
        TuiHint,
        TuiInputModule,
        TuiInputNumberModule,
    ],
    templateUrl: './minter-deploy.component.html',
    styleUrl: './minter-deploy.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                maxlength: ({requiredLength}: {requiredLength: string}) =>
                    `Maximum length — ${requiredLength}`,
                minlength: ({requiredLength}: {requiredLength: string}) =>
                    of(`Minimum length — ${requiredLength}`),
            },
        },
    ],
})
export class MinterDeployComponent {
    protected readonly form = new FormGroup({
        name: new FormControl('', [Validators.required]),
        symbol: new FormControl('', [
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(5),
        ]),
        amount: new FormControl(0, [Validators.required, Validators.min(1)]),
        urlIcon: new FormControl(''),
        description: new FormControl(''),
    });

    protected readonly push = inject(TuiPushService);

    protected openIcon = false;

    @Output()
    public readonly tokenChange = new EventEmitter<TokenMinter>();

    protected showDialog(): void {
        this.openIcon = true;
    }

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.form);

        if (this.form.valid) {
            this.push
                .open('Minted your token', {
                    heading: 'Success',
                    icon: 'check',
                })
                .subscribe();
            this.tokenChange.emit({
                urlIcon: this.form.controls.urlIcon.value ?? '',
                token: this.form.controls.name.value ?? '',
                symbol: this.form.controls.symbol.value ?? '',
                amount: Number(this.form.controls.amount.value) ?? 0,
            });
        }
    }
}
