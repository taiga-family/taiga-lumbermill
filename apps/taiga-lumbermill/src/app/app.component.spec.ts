import {TestBed} from '@angular/core/testing';
import {provideNoopAnimations} from '@angular/platform-browser/animations';
import {provideRouter} from '@angular/router';
import {provideEventPlugins} from '@taiga-ui/event-plugins';

import {AppComponent} from './app.component';

describe('AppComponent', () => {
    it('renders navigation', async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent],
            providers: [
                provideNoopAnimations(),
                provideRouter([]),
                provideEventPlugins(),
            ],
        }).compileComponents();

        const fixture = TestBed.createComponent(AppComponent);

        fixture.detectChanges();

        expect(fixture.nativeElement.textContent).toContain('Taiga Lumbermill');
    });
});
