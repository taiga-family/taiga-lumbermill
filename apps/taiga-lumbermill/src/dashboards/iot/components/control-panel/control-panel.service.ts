import {Injectable} from '@angular/core';

interface ControlPanelData {
    readonly name: string;
    readonly img: string;
    readonly clickedName: string;
    readonly clickedImg: string;
}

export const INITIAL_DATA: ControlPanelData[] = [
    {
        name: 'Open the door',
        img: '@tui.door-open',
        clickedName: 'Close the door',
        clickedImg: '@tui.door-closed',
    },
    {
        name: 'Call security',
        img: '@tui.shield-alert',
        clickedName: 'Call off security',
        clickedImg: '@tui.octagon-x',
    },
    {
        name: 'Turn up the heat',
        img: '@tui.heater',
        clickedName: 'Turn off the heat',
        clickedImg: '@tui.refrigerator',
    },
    {
        name: 'Turn on the kettle',
        img: '@tui.coffee',
        clickedName: 'Turn off the kettle',
        clickedImg: '@tui.cup-soda',
    },
];

@Injectable({
    providedIn: 'root',
})
export class ControlPanelService {
    public readonly controlPanelData = INITIAL_DATA;
}
