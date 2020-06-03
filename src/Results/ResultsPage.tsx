import React, { useState, useEffect } from 'react';
import './ResultsPage.css';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import ResultsList from './ResultsList/ResultsList';
import { ResultsProps } from './types';
import NotFound from './NotFound/Notfound';
import Road from '../shared/Road/Road';

function ResultsPage(props: ResultsProps) {
  const [movies, setMovies] = useState(props.resultsData);
  const [notFound, setNotFound] = useState(false);

  const [sortInput, setSortInput] = React.useState('');
  const [topInput, setTopInput] = React.useState('10');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if(movies.length == 0)
      setNotFound(true);
    else
      setNotFound(false);
  }, [movies])

  useEffect(() => {
    fetch(props.apiUrl + '&sort=' + `${sortInput}` + '&limit=' + `${topInput}`)
        .then(res => res.json())
        .then(
          (result) => {
            setMovies(result);
            setIsLoaded(true);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
      )
  }, [sortInput, topInput, props])

  const onFiltersInputChange = (sort : string, top : string) => {
    setIsLoaded(false);
    setSortInput(sort);
    setTopInput(top);
  }

  const filtersProps = {
    onFiltersInputChange: onFiltersInputChange,
  }

  return (
    <div className="results-container">
        <Filters filtersData={filtersProps} apiUrl={props.apiUrl}/>
        {isLoaded ? 
          <>
            {notFound ? <NotFound/> :
              <>
                <ResultsList resultsData={movies} apiUrl={props.apiUrl}></ResultsList>
                <Pagination variant="outlined" color="secondary" count={10} />
              </> 
            }
          </>
          : <Road/>
      }
    </div>
  );
}

export default ResultsPage;