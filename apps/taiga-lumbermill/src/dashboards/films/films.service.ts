import {Injectable} from '@angular/core';

interface Films {
    readonly title: string;
    readonly durationMinutes: number;
    readonly img: string;
    readonly description: string;
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
        description: 'Random description',
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
        description: 'Random description',
        country: 'USA',
        rating: 6.0,
        year: 2024,
        genre: 'Comedy',
        restrictionsYears: 16,
    },
    {
        title: 'Random name #3',
        durationMinutes: 127,
        img: './movies/3.jpg',
        description: 'Random description',
        country: 'Russia',
        rating: 7.0,
        year: 2024,
        genre: 'Comedy',
        restrictionsYears: 18,
    },
    {
        title: 'Random name #4',
        durationMinutes: 127,
        img: './movies/4.jpg',
        description: 'Random description',
        country: 'Russia',
        rating: 8.8,
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
