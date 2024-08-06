import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'lmb-theme-switcher',
    imports: [CommonModule],
    templateUrl: './theme-switcher.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeSwitcherComponent {}
