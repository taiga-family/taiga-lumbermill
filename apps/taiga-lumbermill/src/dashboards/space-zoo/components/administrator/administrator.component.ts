import {AsyncPipe, CommonModule} from '@angular/common';
import type {WritableSignal} from '@angular/core';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {TuiPieChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, type TuiDayRange} from '@taiga-ui/cdk';
import type {TuiMarkerHandler} from '@taiga-ui/core';
import {
    TuiAppearance,
    TuiButton,
    TuiExpand,
    TuiHint,
    TuiLink,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiBadge,
    TuiCalendarRange,
    tuiCreateDefaultDayRangePeriods,
    TuiStatus,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';

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
        TuiCardLarge,
        TuiCell,
        TuiExpand,
        TuiHeader,
        TuiHint,
        TuiLink,
        TuiPieChart,
        TuiStatus,
        TuiSurface,
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
    protected calendarValue: WritableSignal<TuiDayRange | null> = signal(null);
    protected expanded = false;

    protected events = [
        {
            icon: './nft/1.jpg',
            title: 'feed',
            subtitle: 'Cyberpunk Dog',
            time: TuiDay.currentLocal(),
        },
        {
            icon: './nft/2.jpg',
            title: 'play',
            subtitle: 'Robo Hamster',
            time: TuiDay.jsonParse(
                `${TuiDay.currentLocal().year}-${TuiDay.currentLocal().month}-${TuiDay.currentLocal().day + 1}`,
            ),
        },
    ];

    protected eventsDays = this.events.map((val) => val.time.day);

    protected eventsCalendar = computed(() => {
        const calendar = this.calendarValue();

        return calendar
            ? this.events.filter(
                  (val) => calendar.from <= val.time && val.time <= calendar.to,
              )
            : [];
    });

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
        this.calendarValue.set(day);
    }

    protected marker: TuiMarkerHandler = (e) => [
        this.eventsDays.includes(e.day) ? 'green' : '',
    ];
}
