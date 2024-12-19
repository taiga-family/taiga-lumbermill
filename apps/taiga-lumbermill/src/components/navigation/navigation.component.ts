import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {TUI_DARK_MODE, TuiButton, TuiDataList, TuiDropdown} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'app-navigation',
    imports: [
        RouterLink,
        RouterOutlet,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiNavigation,
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly icon = computed(() =>
        this.darkMode() ? '@tui.sun' : '@tui.moon',
    );

    protected expanded = false;
}
