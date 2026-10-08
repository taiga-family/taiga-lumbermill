import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    standalone: true,
    selector: 'lmb-ai-chat-hero',
    templateUrl: './hero.component.html',
    styleUrl: './hero.component.less',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
