import {AsyncPipe, CommonModule} from '@angular/common';
import type {WritableSignal} from '@angular/core';
import {ChangeDetectionStrategy, Component, computed, signal} from '@angular/core';
import {RouterLink} from '@angular/router';
import {TuiRingChart} from '@taiga-ui/addon-charts';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiDay, type TuiDayRange, tuiSum} from '@taiga-ui/cdk';
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

export const animals = [
    {
        src: './nft/1.jpg',
        title: 'Cyberpunk Dog',
        health: 'seek',
        tags: ['Needs a doctor'],
        from: 'Mars',
        about: 'Some information about this animal',
        action: ['doctor'],
    },
    {
        src: './nft/2.jpg',
        title: 'Robo Hamster',
        health: 'good',
        tags: ['Play'],
        from: 'Mars',
        about: 'Some information about this animal',
        action: ['play'],
    },
    {
        src: './nft/3.jpg',
        title: 'Cyberpunk Cat',
        health: 'good',
        tags: ['Needs to be cleaned'],
        from: 'Mars',
        about: 'Some information about this animal',
        action: ['clean'],
    },
    {
        src: './nft/4.jpg',
        title: 'Robo frog Pepe',
        health: 'hungry',
        tags: ['need food', 'play'],
        from: 'Mars',
        about: 'Some information about this animal',
        action: ['feed', 'play'],
    },
];

@Component({
    standalone: true,
    selector: 'lmb-administrator',
    imports: [
        AsyncPipe,
        CommonModule,
        RouterLink,
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCalendarRange,
        TuiCardLarge,
        TuiCell,
        TuiExpand,
        TuiHeader,
        TuiHint,
        TuiLink,
        TuiRingChart,
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
    protected readonly total = tuiSum(...this.value);
    protected indexRingChart = NaN;
    protected animals = animals;

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
            time: TuiDay.currentLocal().append({day: 1}),
        },
        {
            icon: './nft/3.jpg',
            title: 'clean',
            subtitle: 'Cyberpunk cat',
            time: TuiDay.currentLocal().append({day: -1}),
        },
    ];

    protected eventsDays = this.events.map((val) => val.time.day);

    protected eventsCalendar = computed(() => {
        const calendar = this.calendarValue();

        return calendar
            ? this.events.filter(
                  (val) =>
                      calendar.from.day <= val.time.day &&
                      val.time.day <= calendar.to.day,
              )
            : [];
    });

    protected get sum(): number {
        return Number.isNaN(this.indexRingChart)
            ? this.total
            : this.value[this.indexRingChart];
    }

    protected get label(): string {
        return Number.isNaN(this.indexRingChart)
            ? 'Total'
            : this.labels[this.indexRingChart];
    }

    protected onDayClick(day: TuiDayRange | null): void {
        this.calendarValue.set(day);
    }

    protected marker: TuiMarkerHandler = (e) => [
        this.eventsDays.includes(e.day) ? 'green' : '',
    ];
}
