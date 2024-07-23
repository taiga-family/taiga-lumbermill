import {Injectable} from '@angular/core';

interface Contacts {
    readonly name: string;
    readonly status: string;
    readonly img: string;
}

export const INITIAL_CONTACTS: Contacts[] = [
    {name: 'Misha Zhem', img: './example.png', status: 'online'},
    {name: 'Misha Zhem2', img: './example.png', status: 'online'},
    {name: 'Misha Zhem3', img: './example.png', status: 'online'},
    {name: 'Misha Zhem4', img: './example.png', status: 'online'},
];

interface Recent {
    readonly name: string;
    readonly status: string;
    readonly img: string;
    readonly last: string;
    readonly took: boolean;
}

export const INITIAL_RECENT: Recent[] = [
    {
        name: 'Misha Zhem4',
        img: './example.png',
        status: 'online',
        last: '9:12 PM',
        took: true,
    },
    {
        name: 'Misha Zhem2',
        img: './example.png',
        status: 'online',
        last: '8:45 PM',
        took: false,
    },
    {
        name: 'Misha Zhem',
        img: './example.png',
        status: 'online',
        last: '1:10 PM',
        took: false,
    },
    {
        name: 'Misha Zhem3',
        img: './example.png',
        status: 'online',
        last: '11:05 AM',
        took: true,
    },
];

interface ContactsData {
    readonly contacts: Contacts[];
    readonly recent: Recent[];
}

export const INITIAL_DATA: ContactsData = {
    contacts: INITIAL_CONTACTS,
    recent: INITIAL_RECENT,
};

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    public readonly contactsData = INITIAL_DATA;
    public contacts = true;

    public updateFades(value: boolean): void {
        this.contacts = value;
    }
}
