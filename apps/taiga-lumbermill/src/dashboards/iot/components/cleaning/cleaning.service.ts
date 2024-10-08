import {Injectable} from '@angular/core';
import {map, startWith, takeWhile, timer} from 'rxjs';

interface CleaningSchedule {
    readonly id: string;
    readonly date: string;
}

export const INITIAL_DATA: CleaningSchedule[] = [{id: '1', date: '17.07.2024'}];

@Injectable({
    providedIn: 'root',
})
export class CleaningService {
    public readonly progress$ = timer(300, 200).pipe(
        map((i) => i + 30),
        startWith(30),
        takeWhile((value) => value <= 100),
    );

    public readonly schedule = INITIAL_DATA;
}
