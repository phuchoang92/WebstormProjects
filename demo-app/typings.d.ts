export interface Genre {
    id: number
    name: string
}

export interface Movie {
    id: number
    title: string
    original_title: string
    backdrop_path: string
    media_type?: string
    release_date?: string
    first_air_date: string
    genres: Genre[]
    origin_country: string[]
    original_language: string
    overview: string
    popularity: number
    poster_path: string
    vote_average: number
    vote_count: number
}

export interface Element {
    type:
        | 'Bloopers'
        | 'Featurette'
        | 'Behind the Scenes'
        | 'Clip'
        | 'Trailer'
        | 'Teaser'
}

export class User {
    id: string
    created_at: string
    updated_at?: string
    name: string
    email: string
    role: string
    photo:string
}

export class CharacterBasic {
    id: number
    name: string
    character: string
    profile_path: string
}