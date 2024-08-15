import {CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    Output,
} from '@angular/core';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

import type {TokenMinter} from '../minter.component';

@Component({
    standalone: true,
    selector: 'lmb-minter-created',
    imports: [CommonModule, TuiAvatar, TuiButton, TuiTitle],
    templateUrl: './minter-created.component.html',
    styleUrl: './minter-created.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MinterCreatedComponent {
    @Input()
    public token: TokenMinter = {
        urlIcon: '',
        token: '',
        amount: 0,
        symbol: '',
    };

    @Output()
    public readonly tokenChange = new EventEmitter<null>();

    protected createNew(): void {
        this.tokenChange.emit(null);
    }
}
