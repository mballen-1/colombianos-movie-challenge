export interface Cast {
    cast_id: number;
    character: string;
    name: string;
    profile_path: string;
}

export interface CastResponse {
    cast: Array<Cast>;
    id: number;
}