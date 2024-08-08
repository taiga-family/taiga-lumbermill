import {Injectable} from '@angular/core';

interface MinterData {
    readonly title: string;
    readonly defaultValue: string;
    readonly type: string;
    readonly description: string;
}

const INITIAL_DATA: MinterData[] = [
    {
        title: 'Jetton Name',
        defaultValue: '',
        type: 'text',
        description: 'Your project name with spaces',
    },
    {
        title: 'Jetton Symbol',
        defaultValue: '',
        type: 'text',
        description: 'Currency symbol appearing in balance (usually 3-5 uppercase chars)',
    },
    {
        title: 'Number of tokens',
        defaultValue: '0',
        type: 'number',
        description: 'Number of initial tokens to mint and send to your waller address',
    },
    {
        title: 'Description',
        defaultValue: '',
        type: 'text',
        description: 'Optional sentence explaining about yor project',
    },
];

@Injectable({
    providedIn: 'root',
})
export class MinterService {
    public readonly minterData = INITIAL_DATA;
}
