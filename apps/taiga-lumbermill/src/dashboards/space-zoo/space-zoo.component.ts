import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

import {TableComponent} from './components/table/table.component';

@Component({
    standalone: true,
    selector: 'lmb-space-zoo',
    imports: [CommonModule, TableComponent],
    templateUrl: './space-zoo.component.html',
    styleUrl: './space-zoo.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SpaceZooComponent {}
