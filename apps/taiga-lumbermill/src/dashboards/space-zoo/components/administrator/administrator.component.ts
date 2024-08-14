import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiDay} from '@taiga-ui/cdk';
import {TuiAppearance, TuiButton, TuiCalendar, TuiHint, TuiTitle} from '@taiga-ui/core';
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
        TuiCalendar,
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
    protected calendarValue: TuiDay | null = null;

    protected animals = [
        {
            src: './nft/1.jpg',
            title: 'Cyberpunk Dog',
            health: 'seek',
            tags: ['Needs a doctor'],
        },
        {
            src: './nft/2.jpg',
            title: 'Robo Hamster',
            health: 'good',
            tags: ['Play'],
        },
        {
            src: './nft/3.jpg',
            title: 'Cyberpunk Cat',
            health: 'good',
            tags: ['Needs to be cleaned'],
        },
        {
            src: './nft/4.jpg',
            title: 'Robo frog Pepe',
            health: 'hungry',
            tags: ['need food', 'play'],
        },
    ];

    @Output()
    public readonly openTableChange = new EventEmitter<boolean>();

    protected openTable(): void {
        this.openTableChange.emit(true);
    }

    protected onDayClick(day: TuiDay): void {
        this.calendarValue = day;
    }
}
