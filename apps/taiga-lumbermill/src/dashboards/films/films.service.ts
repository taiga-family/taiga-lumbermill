import {Injectable} from '@angular/core';

interface Films {
    readonly title: string;
    readonly durationMinutes: number;
    readonly img: string;
    readonly description: string;
    readonly link: string;
    readonly country: string;
    readonly rating: number;
    readonly year: number;
    readonly genre: string;
    readonly restrictionsYears: number;
}

export const INITIAL_DATA: Films[] = [
    {
        title: 'Random name',
        durationMinutes: 127,
        img: './movies/1.jpg',
        description:
            'A wisecracking mutant mercenary with accelerated healing, but severe scarring over his body after undergoing an experimental cancer treatment',
        link: '',
        country: 'Russia',
        rating: 7.8,
        year: 2024,
        genre: 'Comedy',
        restrictionsYears: 18,
    },
    {
        title: 'Random name #2',
        durationMinutes: 127,
        img: './movies/2.jpg',
        description:
            'A wisecracking mutant mercenary with accelerated healing, but severe scarring over his body after undergoing an experimental cancer treatment',
        link: '',
        country: 'Russia',
        rating: 7.8,
        year: 2024,
        genre: 'Comedy',
        restrictionsYears: 18,
    },
    {
        title: 'Random name #3',
        durationMinutes: 127,
        img: './movies/3.jpg',
        description:
            'A wisecracking mutant mercenary with accelerated healing, but severe scarring over his body after undergoing an experimental cancer treatment',
        link: '',
        country: 'Russia',
        rating: 7.8,
        year: 2024,
        genre: 'Comedy',
        restrictionsYears: 18,
    },
    {
        title: 'Random name #4',
        durationMinutes: 127,
        img: './movies/4.jpg',
        description:
            'A wisecracking mutant mercenary with accelerated healing, but severe scarring over his body after undergoing an experimental cancer treatment',
        link: '',
        country: 'Russia',
        rating: 7.8,
        year: 2024,
        genre: 'Comedy',
        restrictionsYears: 18,
    },
];

@Injectable({
    providedIn: 'root',
})
export class FilmsService {
    public readonly filmsData = INITIAL_DATA.concat(
        INITIAL_DATA,
        INITIAL_DATA,
        INITIAL_DATA,
        INITIAL_DATA,
        INITIAL_DATA,
    );
}
