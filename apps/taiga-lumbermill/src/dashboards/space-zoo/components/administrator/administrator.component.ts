import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiDayRange} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiExpand,
    TuiHint,
    TuiLink,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiCalendarRange,
    tuiCreateDefaultDayRangePeriods,
    TuiStatus,
} from '@taiga-ui/kit';
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
        TuiCalendarRange,
        TuiCardLarge,
        TuiExpand,
        TuiHeader,
        TuiHint,
        TuiLink,
        TuiPieChart,
        TuiStatus,
        TuiTitle,
    ],
    templateUrl: './administrator.component.html',
    styleUrl: './administrator.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdministratorComponent {
    protected items = tuiCreateDefaultDayRangePeriods();
    protected readonly value = [13769, 12367, 10172, 3018, 2592];
    protected readonly labels = ['Food', 'Сleaning', 'Electricity', 'Water', 'Other'];
    protected calendarValue: TuiDayRange | null = null;
    protected expanded = false;

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

    protected onDayClick(day: TuiDayRange | null): void {
        this.calendarValue = day;
    }
}
