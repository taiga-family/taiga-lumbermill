import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Router} from '@angular/router';
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
import {map, of, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'lmb-login',
    imports: [
        CommonModule,
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
    templateUrl: './login.component.html',
    styleUrl: './login.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_VALIDATION_ERRORS,
            useValue: {
                required: "Value can't be empty",
                email: 'Invalid email',
                minlength: ({requiredLength}: {requiredLength: string}) =>
                    of(`Minimum length — ${requiredLength}`),
            },
        },
    ],
})
export class LoginComponent {
    private readonly router = inject(Router);
    protected readonly form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(5)]),
        rememberMe: new FormControl(false),
    });

    protected readonly submit$ = new Subject<void>();

    protected readonly submitLoader = toSignal(
        this.submit$.pipe(
            switchMap(() =>
                timer(4000).pipe(
                    map(() => this.goMain()),
                    startWith(true),
                ),
            ),
        ),
        {initialValue: false},
    );

    protected goMain(): boolean {
        this.router.navigate(['']);

        return false;
    }

    protected onSubmit(): void {
        if (!this.form.valid) {
            return;
        }

        this.form.disable();
        this.submit$.next();
    }
}
