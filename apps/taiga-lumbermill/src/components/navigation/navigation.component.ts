import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
    TUI_DARK_MODE,
    TuiAppearance,
    TuiBreakpointService,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiIcon,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiChevron, TuiFade} from '@taiga-ui/kit';
import {TuiNavigation} from '@taiga-ui/layout';
import {map} from 'rxjs';

@Component({
    standalone: true,
    selector: 'app-navigation',
    imports: [
        NgIf,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TuiAppearance,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiFade,
        TuiIcon,
        TuiNavigation,
        TuiTitle,
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    protected readonly mobile = toSignal(
        inject(TuiBreakpointService).pipe(map((key) => key === 'mobile')),
    );

    protected readonly darkMode = inject(TUI_DARK_MODE);
    protected readonly icon = computed(() =>
        this.darkMode() ? '@tui.sun' : '@tui.moon',
    );

    protected expanded = false;
}
