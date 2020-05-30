import { DEFAULT_MOVIES_REQUESTED } from "./HomePageSagas/types";

export const getDefaultMovies = () => ({
    type: DEFAULT_MOVIES_REQUESTED
})
