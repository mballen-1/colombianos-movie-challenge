import React, { useState, useEffect } from 'react';
import './ResultsPage.css';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import ResultsList from './ResultsList/ResultsList';
import { ResultsProps } from './types';
import NotFound from './NotFound/Notfound';
import Road from '../shared/Road/Road';
import Header from '../shared/Header/Header';
import { TMDB_API } from '../constants';

function ResultsPage(props: ResultsProps) {
  const [movies, setMovies] = useState(props.resultsData);
  const [notFound, setNotFound] = useState(false);

  const [sortInput, setSortInput] = React.useState('');
  const [topInput, setTopInput] = React.useState('10');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [headerInputTitle, setheaderInputTitle] = useState('');
  const [resultURL, setResultURL] = useState(props.apiUrl);

  useEffect(() => {
    if(movies.length == 0)
      setNotFound(true);
    else
      setNotFound(false);
  }, [movies])

  useEffect(() => {
    fetch(resultURL + '&sort=' + `${sortInput}` + '&limit=' + `${topInput}`)
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
  }, [sortInput, topInput, resultURL])

  const onHeaderInputSubmit = () => {
    if (headerInputTitle) {
      setResultURL(TMDB_API + `?title=${headerInputTitle}`)
      fetch(TMDB_API + `?title=${headerInputTitle}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setMovies(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  }

  const onFiltersInputChange = (sort : string, top : string) => {
    setIsLoaded(false);
    setSortInput(sort);
    setTopInput(top);
  }

  const filtersProps = {
    onFiltersInputChange: onFiltersInputChange,
  }

  const onInputTitleChange = (title: string) => {
    setheaderInputTitle(title);
  }

  const headerProps = {
    onInputTitleChange: onInputTitleChange,
    onHeaderInputSubmit: onHeaderInputSubmit
  }

  return (
    <div className="results-container">
        <Header headerData={headerProps} />
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