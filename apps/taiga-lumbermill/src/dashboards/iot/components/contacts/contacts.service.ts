import {Injectable} from '@angular/core';

interface Contacts {
    readonly name: string;
    readonly status: string;
    readonly img: string;
    readonly Initials: string;
}

export const INITIAL_CONTACTS: Contacts[] = [
    {name: 'Misha Zhem', img: './example.png', status: 'online', Initials: 'MZ'},
    {name: 'Oleg B.', img: '', status: 'online', Initials: 'OB'},
    {name: 'Andrey M.', img: '', status: 'online', Initials: 'AM'},
    {name: 'Misha Zhem3', img: './example.png', status: 'online', Initials: 'MZ'},
    {name: 'Vladimir D.', img: '', status: 'online', Initials: 'VD'},
    {name: 'Gleb H.', img: '', status: 'online', Initials: 'GH'},
    {name: 'Misha Zhem2', img: './example.png', status: 'online', Initials: 'MZ'},
    {name: 'Misha Zhem4', img: './example.png', status: 'online', Initials: 'MZ'},
];

interface Recent {
    readonly name: string;
    readonly status: string;
    readonly img: string;
    readonly last: string;
    readonly Initials: string;
    readonly took: boolean;
}

export const INITIAL_RECENT: Recent[] = [
    {
        name: 'Misha Zhem4',
        img: './example.png',
        status: 'online',
        last: '9:12 PM',
        took: true,
        Initials: 'MZ',
    },
    {
        name: 'Oleg B.',
        img: '',
        status: 'online',
        last: '11:35 AM',
        took: true,
        Initials: 'OB',
    },
    {
        name: 'Andrey M.',
        img: '',
        status: 'online',
        last: '12:15 AM',
        took: false,
        Initials: 'AM',
    },
    {
        name: 'Misha Zhem2',
        img: './example.png',
        status: 'online',
        last: '8:45 PM',
        took: false,
        Initials: 'MZ',
    },
    {
        name: 'Misha Zhem',
        img: './example.png',
        status: 'online',
        last: '1:10 PM',
        took: false,
        Initials: 'MZ',
    },
    {
        name: 'Misha Zhem3',
        img: './example.png',
        status: 'online',
        last: '11:05 AM',
        took: true,
        Initials: 'MZ',
    },
    {
        name: 'Gleb H.',
        img: '',
        status: 'online',
        last: '1:15 AM',
        took: false,
        Initials: 'GH',
    },
    {
        name: 'Vladimir D.',
        img: '',
        status: 'online',
        last: '3:15 PM',
        took: true,
        Initials: 'VD',
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
}
