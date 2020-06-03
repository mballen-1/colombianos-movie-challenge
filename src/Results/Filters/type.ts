import { SingleMovieProp } from "../../shared/SingleMovie/types";

export interface FiltersProps {
    filtersData: {
        onFiltersInputChange : (sort : string, top : string) => void;
    }
    apiUrl: String
}