import {Injectable} from '@angular/core';

interface ContactsData {
    readonly name: string;
    readonly status: string;
    readonly img: string;
}

export const INITIAL_DATA: ContactsData[] = [
    {name: 'Misha Zhem', img: './example.png', status: 'online'},
    {name: 'Misha Zhem2', img: './example.png', status: 'online'},
    {name: 'Misha Zhem3', img: './example.png', status: 'online'},
    {name: 'Misha Zhem4', img: './example.png', status: 'online'},
];

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    public readonly contactsData = INITIAL_DATA;
}
