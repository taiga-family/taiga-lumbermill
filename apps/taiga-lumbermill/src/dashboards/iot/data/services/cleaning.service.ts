import {Injectable} from '@angular/core';
import {map, startWith, takeWhile, timer} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CleaningService {
    public readonly value$ = timer(300, 200).pipe(
        map((i) => i + 30),
        startWith(30),
        takeWhile((value) => value <= 100),
    );

    public readonly color$ = this.value$.pipe(
        map((value) => {
            if (value < 33) {
                return '#ec5353';
            }

            if (value < 66) {
                return '#ecec53';
            }

            return '#235ad1';
        }),
    );
}
