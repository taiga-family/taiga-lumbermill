import {TestBed} from '@angular/core/testing';
import {provideRouter} from '@angular/router';
import {provideTaiga} from '@taiga-ui/core';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
    it('renders navigation', async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [provideRouter([]), provideTaiga()],
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('Taiga Lumbermill');
    });
});
