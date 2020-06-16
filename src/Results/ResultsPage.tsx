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
  const [notFound, setNotFound] = useState(false);

  const [sortInput, setSortInput] = React.useState('sort-by');
  const [topInput, setTopInput] = React.useState('0');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [headerInputTitle, setheaderInputTitle] = useState('');
  const [resultURL, setResultURL] = useState(props.apiUrl);

  const [currentURL, setCurrentURL] = useState(props.apiUrl);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (props.resultsData.length === 0)
      setNotFound(true);
    else
      setNotFound(false);
  }, [props.resultsData])

  useEffect(() => {
    props.onEndpointRequest(currentURL + '&page=' + `${page}`);
  }, [page]);

  useEffect(() => {
    if (topInput !== '0' && sortInput === 'title')
      requestSortedMovies('rating', 'true', 'true', topInput);

    else if (topInput !== '0' && sortInput === 'most-recent')
      requestSortedRecentMovies('rating', '2018', 'true', topInput);

    else if (topInput !== '0' && sortInput !== 'title')
      requestSortedMovies('rating', 'false', 'true', topInput);

    else if (topInput === '0' && sortInput === 'title')
      requestSortedMovies('title', 'true', 'false', '10');

    else if (topInput === '0' && sortInput === 'most-recent')
      requestSortedRecentMovies('title', '2018', 'false', '10');

    else
      requestSortedMovies('', 'false', 'false', '10')

  }, [sortInput, topInput])

  function requestSortedMovies(sortPriority: string, sortByTitle: String, sortByRating: string, limit: string) {
    const url = `${resultURL}&sortPriority=${sortPriority}&sortByTitle=${sortByTitle}&sortByRating=${sortByRating}&limit=${limit}`;
    if(url != currentURL){
      props.onEndpointRequest(url);
      setCurrentURL(url);
    }
  }

  function requestSortedRecentMovies(sortPriority: string, year: String, sortByRating: string, limit: string) {
    const url = `${resultURL} &sortPriority=${sortPriority}&title=${year}&sortByRating=${sortByRating}&limit=${limit}`;
    if (url != currentURL){
      props.onEndpointRequest(url);
      setCurrentURL(url);
    }
  }

  const onHeaderInputSubmit = () => {
    setPage(1);
    const url = `${TMDB_API}?title=${headerInputTitle}`;
    if (url != currentURL){
      props.onEndpointRequest(url);
      setCurrentURL(url);
    }
  }

  const onSortInputChange = (sort: string) => {
    setIsLoaded(false);
    setPage(1);
    setSortInput(sort);
  }

  const onTopsInputChange = (top: string) => {
    setIsLoaded(false);
    setPage(1);
    setTopInput(top);
  }

  const filtersProps = {
    onSortInputChange: onSortInputChange,
    onTopsInputChange: onTopsInputChange
  }

  const onInputTitleChange = (title: string) => {
    setheaderInputTitle(title);
  }

  const headerProps = {
    onInputTitleChange: onInputTitleChange,
    onHeaderInputSubmit: onHeaderInputSubmit
  }

  const handlePaginationOnChange = (pageValue: number) => {
    if (pageValue != page) {
      window.scrollTo(0, 0);
      setIsLoaded(false);
      setPage(pageValue);
    }
  };

  return (
    <div className="results-container">
      <Header headerData={headerProps} />
      <Filters filtersData={filtersProps} apiUrl={props.apiUrl} />
      {props.isLoaded ?
        <>
          {notFound ? <NotFound /> :
            <div className="movies-results-container">
              <h6 className="showing-h6">Showing results</h6>
              <ResultsList 
                resultsData={props.resultsData} 
                apiUrl={props.apiUrl}
                onEndpointRequest={() => {console.log()}}
                isLoaded={true}
                ></ResultsList>
            </div>
          }
          <Pagination
            className={`movies-results-pagination`}
            color={'primary'}
            count={20}
            onChange={(e, p) => handlePaginationOnChange(p)} page={page} />
        </>
        : <Road />
      }
    </div>
  );
}

export default ResultsPage;