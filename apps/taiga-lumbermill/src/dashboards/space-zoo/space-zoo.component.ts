import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
    standalone: true,
    selector: 'lmb-space-zoo',
    imports: [CommonModule, RouterOutlet],
    templateUrl: './space-zoo.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceZooComponent {}
