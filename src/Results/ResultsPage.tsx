import React, { useState, useEffect } from 'react';
import './ResultsPage.css';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import ResultsList from './ResultsList/ResultsList';
import { ResultsProps } from './types';
import { SingleMovieProp } from '../shared/SingleMovie/types';

function ResultsPage(props: ResultsProps) {
  const [movies, setMovies] = useState(props.resultsData);

  const onFiltersInputChange = (moviesArr : Array<SingleMovieProp>) => {
    setMovies(moviesArr);
  }

  const filtersProps = {
    onFiltersInputChange: onFiltersInputChange
  }

  return (
    <div className="results-container">
        <Filters filtersData={filtersProps} apiUrl={props.apiUrl}/>
        <ResultsList resultsData={movies}
                     apiUrl={props.apiUrl}></ResultsList>
        <Pagination variant="outlined" color="secondary" count={10} />
    </div>
  );
}

export default ResultsPage;