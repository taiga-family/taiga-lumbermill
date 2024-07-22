import {CommonModule} from '@angular/common';
import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiAppearance, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiHeader} from '@taiga-ui/experimental';
import {TuiCardLarge} from '@taiga-ui/layout';

import type {ResponseData} from './weather.interface';
import {WeatherService} from './weather.service';

@Component({
    standalone: true,
    selector: 'lmb-weather',
    imports: [CommonModule, TuiAppearance, TuiCardLarge, TuiHeader, TuiTitle, TuiIcon],
    templateUrl: './weather.component.html',
    styleUrl: './weather.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherComponent implements OnInit {
    protected weatherService = inject(WeatherService);
    protected info: any = null;

    public ngOnInit(): void {
        this.weatherService.getTest().subscribe((result: ResponseData) => {
            this.info = result;
        });
    }
}
