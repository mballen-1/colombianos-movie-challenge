export const DEFAULT_MOVIES_REQUESTED = 'DEFAULT_MOVIES_REQUESTED';

interface GetHomePageMovies {
    type: typeof DEFAULT_MOVIES_REQUESTED
}

export type HomePageSagaTypes =
    | GetHomePageMovies;
