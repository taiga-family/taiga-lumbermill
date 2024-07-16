import {isPlatformServer} from '@angular/common';
import {inject, Injectable, PLATFORM_ID} from '@angular/core';
import {FormControl} from '@angular/forms';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CleaningService {
    public control = new FormControl('24.07.2024');
    public control2 = new FormControl();
    public readonly max = 100;
    public readonly value$ = isPlatformServer(inject(PLATFORM_ID))
        ? of(30)
        : timer(300, 200).pipe(
              map((i) => i + 30),
              startWith(30),
              takeWhile((value) => value <= this.max),
          );

    public readonly color$ = this.value$.pipe(
        map((value) => {
            if (value < 33) {
                return '#ec5353';
            }

            if (value < 66) {
                return '#ecec53';
            }
            // alert(this.control2.value);

            return '#235ad1';
        }),
    );
}
