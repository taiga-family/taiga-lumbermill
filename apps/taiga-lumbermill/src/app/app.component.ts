import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';

import {NxWelcomeComponent} from './nx-welcome.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NxWelcomeComponent, RouterModule, TuiRoot],
    templateUrl: './app.component.html',
    styleUrl: './app.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title = 'taiga-lumbermill';
}
