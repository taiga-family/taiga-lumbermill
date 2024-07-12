import {ChangeDetectionStrategy, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';

import {NavigationComponent} from '../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterModule, TuiRoot, NavigationComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    public title = 'taiga-lumbermill';
}
