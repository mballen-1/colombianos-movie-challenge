import { SingleMovieProp } from "../../shared/SingleMovie/types";

export interface FiltersProps {
    filtersData: {
        onSortInputChange : (sort : string) => void;
        onTopsInputChange : (tops : string) => void;
        sortSelectOption: string;
        topSelectOption: string;
    }
    apiUrl: String
}