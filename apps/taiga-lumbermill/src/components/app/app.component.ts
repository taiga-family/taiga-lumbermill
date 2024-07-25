import {APP_BASE_HREF} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';

import {NavigationComponent} from '../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NavigationComponent, RouterModule, TuiRoot],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: APP_BASE_HREF, useValue: '/taiga-lumbermill/'}],
})
export class AppComponent {
    public title = 'taiga-lumbermill';
}
