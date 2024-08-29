import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {
    TuiAppearance,
    TuiBreakpointService,
    TuiButton,
    TuiDataList,
    TuiDropdown,
    TuiExpand,
    TuiIcon,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiChevron} from '@taiga-ui/kit';
import {TuiHeader, TuiNavigation} from '@taiga-ui/layout';
import {map} from 'rxjs';

import {ThemeService} from '../../services/theme.service';

@Component({
    standalone: true,
    selector: 'app-navigation',
    imports: [
        CommonModule,
        RouterLink,
        RouterLinkActive,
        RouterOutlet,
        TuiAppearance,
        TuiButton,
        TuiChevron,
        TuiDataList,
        TuiDropdown,
        TuiExpand,
        TuiHeader,
        TuiIcon,
        TuiNavigation,
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
    protected themeService = inject(ThemeService);
    protected readonly mobile$ = inject(TuiBreakpointService).pipe(
        map((key) => key === 'mobile'),
    );

    protected open = false;
    protected expanded = false;
    protected submenu = false;
    protected openTheme = false;

    public chooseTheme(theme: string): void {
        this.themeService.theme = theme;
        this.openTheme = false;
    }
}
