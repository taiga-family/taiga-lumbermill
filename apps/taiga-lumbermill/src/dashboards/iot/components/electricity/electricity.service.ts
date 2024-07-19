import {Injectable} from '@angular/core';
import type {TuiDayRange} from '@taiga-ui/cdk';
import {TuiDay} from '@taiga-ui/cdk';

@Injectable({
    providedIn: 'root',
})
export class ElectricityService {
    public generateRandomData(
        {from, to}: TuiDayRange,
        initial: number,
    ): ReadonlyArray<[TuiDay, number]> {
        return new Array(TuiDay.lengthBetween(from, to) + 1)
            .fill(0)
            .reduce<ReadonlyArray<[TuiDay, number]>>(
                (array, _, i) => [
                    ...array,
                    [
                        from.append({day: i}),
                        Math.max(
                            (i ? array[i - 1][1] : initial) + Math.random() * 10 - 5,
                            0,
                        ),
                    ],
                ],
                [],
            )
            .filter(([day]) => day.dayOfWeek() < 5);
    }

    public random(data: TuiDayRange): ReadonlyArray<ReadonlyArray<[TuiDay, number]>> {
        return [this.generateRandomData(data, 100)];
    }

    public onlyMondays(range: readonly TuiDay[]): readonly string[] {
        return range.filter((day) => !day.dayOfWeek()).map(String);
    }

    public even<T>(array: readonly T[]): readonly T[] {
        return array.filter((_, i) => !(i % 2));
    }
}
