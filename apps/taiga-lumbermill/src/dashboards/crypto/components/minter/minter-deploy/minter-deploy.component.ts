import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Output,
} from '@angular/core';
import {
    FormArray,
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {TuiAutoFocus, tuiMarkControlAsTouchedAndValidate} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton, TuiDialog, TuiError, TuiHint} from '@taiga-ui/core';
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

interface MinterData {
    readonly title: string;
    readonly defaultValue: string;
    readonly type: string;
    readonly description: string;
}

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
        urlIcon: new FormControl('', [Validators.required]),
        description: new FormControl(''),
    });

    protected readonly minterData: MinterData[] = [
        {
            title: 'Jetton Name',
            defaultValue: '',
            type: 'text',
            description: 'Your project name with spaces',
        },
        {
            title: 'Jetton Symbol',
            defaultValue: '',
            type: 'text',
            description:
                'Currency symbol appearing in balance (usually 3-5 uppercase chars)',
        },
        {
            title: 'Number of tokens',
            defaultValue: '0',
            type: 'number',
            description:
                'Number of initial tokens to mint and send to your waller address',
        },
        {
            title: 'Description',
            defaultValue: '',
            type: 'text',
            description: 'Optional sentence explaining about yor project',
        },
    ];

    protected readonly push = inject(TuiPushService);
    protected readonly alert = inject(TuiAlertService);
    protected minterForm = new FormArray(
        this.minterData.map((item) => new FormControl(item.defaultValue)),
    );

    protected openIcon = false;
    protected warningIcon = false;
    protected success = false;
    protected urlIcon = '';

    @Output()
    public readonly tokenChange = new EventEmitter<TokenMinter>();

    protected showDialog(): void {
        this.openIcon = true;
    }

    protected onSubmit(): void {
        tuiMarkControlAsTouchedAndValidate(this.form);
    }

    protected deploy(): void {
        let required = true;

        for (let i = 0; i < this.minterForm.length; i++) {
            if (this.minterData[i].defaultValue === this.minterForm.controls[i].value) {
                required = false;
            }
        }

        if (!required) {
            this.alert
                .open('Тot all required fields are filled in', {
                    label: 'Try again',
                    status: 'warning',
                })
                .subscribe();

            return;
        }

        if (this.urlIcon === '') {
            this.warningIcon = true;

            return;
        }

        this.push
            .open('Minted your token', {
                heading: 'Success',
                icon: 'check',
            })
            .subscribe();
        this.success = true;
        this.tokenChange.emit({
            urlIcon: this.urlIcon,
            token: this.minterForm.controls[0].value ?? '',
            symbol: this.minterForm.controls[1].value ?? '',
            amount: Number(this.minterForm.controls[2].value) ?? 0,
        });
    }
}
