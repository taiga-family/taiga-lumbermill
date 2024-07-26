import {AsyncPipe, CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TuiAxes,
    TuiLineChart,
    TuiLineDaysChart,
    TuiLineDaysChartHint,
} from '@taiga-ui/addon-charts';
import type {TuiDayLike, TuiMapper, TuiMatcher} from '@taiga-ui/cdk';
import {TuiDay, TuiDayRange, TuiFilterPipe, TuiMapperPipe, TuiMonth} from '@taiga-ui/cdk';
import type {TuiPoint} from '@taiga-ui/core';
import {TUI_MONTHS, TuiAppearance, TuiIcon, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiCell, TuiHeader} from '@taiga-ui/layout';
import type {Observable} from 'rxjs';
import {map, of} from 'rxjs';

import {ElectricityService} from '../../../iot/components/electricity/electricity.service';
import {PricesService} from './prices.service';

@Component({
    standalone: true,
    selector: 'lmb-prices',
    imports: [
        AsyncPipe,
        CommonModule,
        TuiAppearance,
        TuiAvatar,
        TuiAxes,
        TuiCardLarge,
        TuiCell,
        TuiFilterPipe,
        TuiHeader,
        TuiIcon,
        TuiLineChart,
        TuiLineDaysChart,
        TuiLineDaysChartHint,
        TuiMapperPipe,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './prices.component.html',
    styleUrl: './prices.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricesComponent {
    protected electricityService = inject(ElectricityService);
    protected pricesService = inject(PricesService).pricesData;
    protected clicked = false;
    protected filterButton = -1;
    protected choosen = -1;
    protected readonly months$ = inject(TUI_MONTHS);
    protected readonly filterButtons = ['H', 'D', 'M', '6M', 'Y'];

    protected show = new TuiDayRange(
        TuiDay.currentLocal(),
        TuiDay.currentLocal().append({month: 3}),
    );

    protected days = this.electricityService.random(this.show);

    protected readonly maxLength: TuiDayLike = {month: 4};

    protected get range(): TuiDayRange {
        return this.computeRange(this.show);
    }

    protected chooseToken(value: number): void {
        this.clicked = !this.clicked;
        this.choosen = value;
    }

    protected filterCheck(value: number): void {
        this.filterButton = value;
    }

    protected getWidth({from, to}: TuiDayRange): number {
        return TuiDay.lengthBetween(from, to);
    }

    protected getDate(day: TuiDay | number, date: TuiDay): TuiDay {
        return day instanceof TuiDay ? day : date.append({day});
    }

    protected labels({from, to}: TuiDayRange): Observable<readonly string[]> {
        const length = TuiDay.lengthBetween(from, to);

        if (length > 90) {
            return this.months$.pipe(
                map((months: any) =>
                    Array.from(
                        {length: TuiMonth.lengthBetween(from, to) + 1},
                        (_, i) => months[from.append({month: i}).month],
                    ),
                ),
            );
        }

        const range = Array.from({length}, (_, day) => from.append({day}));
        const mondays = this.electricityService.onlyMondays(range);
        const days = range.map(String);

        if (length > 60) {
            return of(this.electricityService.even(mondays));
        }

        if (length > 14) {
            return of(mondays);
        }

        if (length > 7) {
            return of(this.electricityService.even(days));
        }

        return of(days);
    }

    protected readonly filter: TuiMatcher<[readonly [TuiDay, number], TuiDayRange]> = (
        [day],
        {from, to},
    ) => day.daySameOrAfter(from) && day.daySameOrBefore(to);

    protected readonly toNumbers: TuiMapper<
        [ReadonlyArray<readonly [TuiDay, number]>, TuiDayRange],
        readonly TuiPoint[]
    > = (days, {from}) =>
        days.map(([day, value]) => [TuiDay.lengthBetween(from, day), value]);

    protected onDataChange(data: TuiDayRange): void {
        this.days = this.electricityService.random(data);
    }

    protected computeRange(range: TuiDayRange): TuiDayRange {
        const {from, to} = range;
        const length = TuiDay.lengthBetween(from, to);
        const dayOfWeekFrom = from.dayOfWeek();
        const dayOfWeekTo = to.dayOfWeek();
        const mondayFrom = dayOfWeekFrom ? from.append({day: 7 - dayOfWeekFrom}) : from;
        const mondayTo = dayOfWeekTo ? to.append({day: 7 - dayOfWeekTo}) : to;
        const mondaysLength = TuiDay.lengthBetween(mondayFrom, mondayTo);

        if (length > 90) {
            return range;
        }

        if (length > 60) {
            return new TuiDayRange(
                mondayFrom,
                mondayTo.append({day: mondaysLength % 14}),
            );
        }

        if (length > 14) {
            return new TuiDayRange(mondayFrom, mondayTo);
        }

        return new TuiDayRange(from, to.append({day: length % 2}));
    }
}
