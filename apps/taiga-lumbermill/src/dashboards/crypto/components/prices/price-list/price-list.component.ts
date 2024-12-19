import {AsyncPipe, CommonModule, DecimalPipe} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {TuiButton, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiSkeleton} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell} from '@taiga-ui/layout';

import {CryptoService} from '../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-price-list',
    imports: [
        AsyncPipe,
        CommonModule,
        DecimalPipe,
        TuiAvatar,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiSkeleton,
        TuiTitle,
    ],
    templateUrl: './price-list.component.html',
    styleUrl: './price-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListComponent {
    protected pricesService = inject(CryptoService);
    protected tokens$ = this.pricesService.tokens;

    protected showTokens = 4;

    @Input()
    public token = '';

    @Output()
    public readonly tokenChange = new EventEmitter<string>();

    protected addToken(): void {
        this.showTokens += 1;
    }

    protected chooseToken(value: string): void {
        const res = this.token === value ? '' : value;

        this.token = res;
        this.tokenChange.emit(res);
    }
}
