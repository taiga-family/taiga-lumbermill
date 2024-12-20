import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TUI_DARK_MODE, TuiRoot} from '@taiga-ui/core';

import {NavigationComponent} from '../components/navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NavigationComponent, RouterModule, TuiRoot],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected readonly darkMode = inject(TUI_DARK_MODE);
}
