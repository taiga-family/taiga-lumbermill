import {Injectable} from '@angular/core';

interface Contacts {
    readonly name: string;
    readonly status: string;
    readonly img: string;
}

export const INITIAL_CONTACTS: Contacts[] = [
    {name: 'Misha Zhem', img: './example.png', status: 'online'},
    {name: 'Oleg B.', img: 'OB', status: 'online'},
    {name: 'Andrey M.', img: 'AM', status: 'online'},
    {name: 'Misha Zhem3', img: './example.png', status: 'online'},
    {name: 'Vladimir D.', img: 'VD', status: 'online'},
    {name: 'Gleb H.', img: 'GH', status: 'online'},
    {name: 'Misha Zhem2', img: './example.png', status: 'online'},
    {name: 'Misha Zhem4', img: './example.png', status: 'online'},
    {name: 'Gleb H.', img: 'GH', status: 'online'},
    {name: 'Andrey M.', img: 'AM', status: 'online'},
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
        name: 'Oleg B.',
        img: 'OB',
        status: 'online',
        last: '11:35 AM',
        took: true,
    },
    {
        name: 'Andrey M.',
        img: 'AM',
        status: 'online',
        last: '12:15 AM',
        took: false,
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
    {
        name: 'Gleb H.',
        img: 'GH',
        status: 'online',
        last: '1:15 AM',
        took: false,
    },
    {
        name: 'Vladimir D.',
        img: 'VD',
        status: 'online',
        last: '3:15 PM',
        took: true,
    },
    {
        name: 'Oleg B.',
        img: 'OB',
        status: 'online',
        last: '11:35 AM',
        took: true,
    },
    {
        name: 'Andrey M.',
        img: 'AM',
        status: 'online',
        last: '12:15 AM',
        took: false,
    },
];

interface ContactsData {
    readonly contacts: Contacts[];
    readonly recent: Recent[];
}

export const INITIAL_DATA: ContactsData = {
    contacts: INITIAL_CONTACTS.concat(
        INITIAL_CONTACTS,
        INITIAL_CONTACTS,
        INITIAL_CONTACTS,
        INITIAL_CONTACTS,
        INITIAL_CONTACTS,
    ),
    recent: INITIAL_RECENT.concat(
        INITIAL_RECENT,
        INITIAL_RECENT,
        INITIAL_RECENT,
        INITIAL_RECENT,
        INITIAL_RECENT,
    ),
};

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    public readonly contactsData = INITIAL_DATA;
}
