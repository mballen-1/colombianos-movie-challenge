import { SingleMovieProp } from "../shared/SingleMovie/types";

export interface ResultsProps  {
    resultsData: Array<SingleMovieProp>;
    apiUrl: String;
    onEndpointRequest:(endpoint: string) => void;
    isLoaded: boolean;
}; 
