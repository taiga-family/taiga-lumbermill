import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'app-iot',
    imports: [CommonModule],
    templateUrl: './iot.component.html',
    styleUrl: './iot.component.css',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IotComponent {}
