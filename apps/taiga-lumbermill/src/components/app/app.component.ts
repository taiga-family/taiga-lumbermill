import type {OnInit} from '@angular/core';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import type {Router} from '@angular/router';
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
export class AppComponent implements OnInit {
    public title = 'taiga-lumbermill';
    constructor(private readonly router: Router) {}

    public ngOnInit(): void {
        this.router.navigate(['/dashboards']);
    }
}
