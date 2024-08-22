import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import type {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiError,
    TuiLabel,
    TuiLink,
    TuiLoader,
    TuiTitle,
} from '@taiga-ui/core';
import {TUI_VALIDATION_ERRORS, TuiCheckbox, TuiFieldErrorPipe} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';
import {TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/legacy';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

export const checkPasswords: ValidatorFn = (
    control: AbstractControl,
): ValidationErrors | null => {
    const name = control.get('password');
    const role = control.get('passwordAgain');

    return name && role && name.value === role.value ? {unambiguousRole: true} : null;
};

@Component({
    standalone: true,
    selector: 'lmb-register',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TuiAppearance,
        TuiButton,
        TuiCardLarge,
        TuiCheckbox,
        TuiError,
        TuiFieldErrorPipe,
        TuiHeader,
        TuiInputModule,
        TuiInputPasswordModule,
        TuiLabel,
        TuiLink,
        TuiLoader,
        TuiTitle,
    ],
    templateUrl: './register.component.html',
    styleUrl: './register.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: "Value can't be empty",
                email: 'Invalid email',
            },
        },
    ],
})
export class RegisterComponent {
    protected readonly form = new FormGroup(
        {
            email: new FormControl('', [Validators.required, Validators.email]),
            password: new FormControl('', [Validators.required]),
            passwordAgain: new FormControl('', [Validators.required]),
            rememberMe: new FormControl(false),
        },
        {validators: checkPasswords},
    );

    protected readonly submit$ = new Subject<void>();

    protected readonly submitLoader = toSignal(
        this.submit$.pipe(
            switchMap(() => timer(4000).pipe(map(TUI_FALSE_HANDLER), startWith(true))),
        ),
        {initialValue: false},
    );

    protected onSubmit(): void {
        this.submit$.next();
    }
}
