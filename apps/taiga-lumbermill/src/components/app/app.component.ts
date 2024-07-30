import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';

import {ThemeService} from '../../services/theme.service';
import {NavigationComponent} from '../navigation/navigation.component';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [NavigationComponent, RouterModule, TuiRoot],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected themeService = inject(ThemeService);
    public title = 'taiga-lumbermill';
}
