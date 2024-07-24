import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterModule} from '@angular/router';
import {TuiRoot} from '@taiga-ui/core';

import {NavigationComponent} from '../navigation/navigation.component';
import {ThemeService} from '../navigation/theme.service';

@Component({
    standalone: true,
    selector: 'app-root',
    imports: [RouterModule, TuiRoot, NavigationComponent],
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
    protected themeService = inject(ThemeService);
    public title = 'taiga-lumbermill';
}
