import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';

import {IotComponent} from './iot.component';

describe('IotComponent', () => {
    let component: IotComponent;
    let fixture: ComponentFixture<IotComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [IotComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(IotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
