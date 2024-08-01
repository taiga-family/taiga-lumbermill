import {AsyncPipe, CommonModule} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    inject,
    Input,
    Output,
} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import {
    TuiAppearance,
    TuiButton,
    TuiHint,
    TuiIcon,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

import {CryptoService} from '../../../../../services/crypto.service';

@Component({
    standalone: true,
    selector: 'lmb-price-list',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiAxes,
        TuiButton,
        TuiCardLarge,
        TuiCell,
        TuiHeader,
        TuiHint,
        TuiIcon,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './price-list.component.html',
    styleUrl: './price-list.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceListComponent {
    protected pricesService = inject(CryptoService);
    protected info$ = this.pricesService.info$;
    protected showTokens = 4;

    @Input()
    public chosen = '';

    @Output()
    public readonly chosenChange = new EventEmitter<string>();

    protected addToken(): void {
        this.showTokens += 1;
    }

    protected chooseToken(value: string): void {
        const res = this.chosen === value ? '' : value;

        this.chosen = res;
        this.chosenChange.emit(res);
    }

    protected toNormalView(value: number | string): string {
        return Number(value).toFixed(2);
    }
}
