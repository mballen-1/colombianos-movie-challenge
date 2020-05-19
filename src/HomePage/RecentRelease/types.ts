export interface MovieDataProps {
    movieData: SingleMovie;
}

export interface SingleMovie {
    imgPath: string;
    movieTitle: string;
    releaseDate: string;
    genre: string;
    duration: string;
    synopsis: string;
}