import { SingleMovieProp } from "../../shared/SingleMovie/types";

export interface FiltersProps {
    filtersData: {
        onFiltersInputChange : (movies: Array<SingleMovieProp>) => void;
    }
    apiUrl: String
}