import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    standalone: true,
    selector: 'lmb-weather',
    imports: [CommonModule, TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, TuiIcon],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent {
    protected cards = [
        {day: 'Fri', temp: '21°/25°', icon: '@tui.snowflake'},
        {day: 'Mon', temp: '30°/33°', icon: '@tui.sun'},
        {day: 'Tue', temp: '17°/23°', icon: '@tui.droplet'},
    ];
}
