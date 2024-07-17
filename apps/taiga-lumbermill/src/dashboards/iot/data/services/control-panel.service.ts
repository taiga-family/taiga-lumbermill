import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class ControlPanelService {
    public data = [
        {name: 'Open the door', img: '@tui.door-open'},
        {name: 'Play music', img: '@tui.speaker'},
        {name: 'Call security', img: '@tui.shield-alert'},
        {name: 'Turn up the heat', img: '@tui.heater'},
        {name: 'Turn on the kettle', img: '@tui.coffee'},
    ];
}
