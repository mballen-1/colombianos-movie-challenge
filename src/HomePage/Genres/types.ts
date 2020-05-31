export interface GenresProps {
    genresData: Array<SingleGenreProp>;
    genreSelect: {
        onGenreInputChange : (genre: string) => void;
    }
}

export interface SingleGenreProp {
    name: string;
    backgroundPath: string;
}