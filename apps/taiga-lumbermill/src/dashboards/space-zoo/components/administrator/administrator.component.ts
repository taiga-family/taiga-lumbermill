import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiAppearance, TuiButton, TuiHint, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiStatus} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-administrator',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiHint,
        TuiPieChart,
        TuiStatus,
        TuiTitle,
    ],
    templateUrl: './administrator.component.html',
    styleUrl: './administrator.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministratorComponent {
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly labels = ['Food', 'Сleaning', 'Electricity', 'Water', 'Other'];
    protected animals = [
        {
            src: './example.png',
            title: 'Rabbit',
            health: 'seek',
            tags: [],
        },
        {
            src: './example.png',
            title: 'Rabbit2',
            health: 'good',
            tags: ['Play'],
        },
        {
            src: './example.png',
            title: 'Rabbit3',
            health: 'good',
            tags: ['Needs a doctor'],
        },
    ];

    @Output()
    public readonly openTableChange = new EventEmitter<boolean>();

    protected openTable(): void {
        this.openTableChange.emit(true);
    }
}
