import {ChangeDetectionStrategy, Component} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {TuiButton} from '@taiga-ui/core';
import {map, startWith, Subject, switchMap, timer} from 'rxjs';

@Component({
    standalone: true,
    selector: 'lmb-share-button',
    imports: [TuiButton],
    template: `
        <button
            appearance="icon"
            size="m"
            tuiButton
            type="button"
            class="share"
            [iconStart]="iconShare()"
            (click)="share$.next()"
        ></button>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShareButtonComponent {
    protected readonly share$ = new Subject<void>();
    protected readonly iconShare = toSignal(
        this.share$.pipe(
            switchMap(() =>
                timer(2000).pipe(
                    map(() => '@tui.external-link'),
                    startWith('@tui.check'),
                ),
            ),
        ),
        {initialValue: '@tui.external-link'},
    );
}
