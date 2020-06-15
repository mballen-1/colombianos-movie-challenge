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

  const [sortInput, setSortInput] = React.useState('sort-by');
  const [topInput, setTopInput] = React.useState('0');

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [headerInputTitle, setheaderInputTitle] = useState('');
  const [resultURL, setResultURL] = useState(props.apiUrl);

  const [currentURL, setCurrentURL] = useState(props.apiUrl);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (movies.length === 0)
      setNotFound(true);
    else
      setNotFound(false);
  }, [movies])

  useEffect(() => {
    fetch(currentURL + '&page=' + `${page}`)
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
  }, [currentURL, page]);

  useEffect(() => {
    if (topInput !== '0' && sortInput === 'title')
      getSortUrl('rating', 'true', 'true', topInput);
    else if (topInput !== '0' && sortInput === 'most-recent')
      getSortUrlRecentRelease('rating', '2018', 'true', topInput);
    else if (topInput !== '0' && sortInput !== 'title')
      getSortUrl('rating', 'false', 'true', topInput);
    else if (topInput === '0' && sortInput === 'title')
      getSortUrl('title', 'true', 'false', '10');
    else if (topInput === '0' && sortInput === 'most-recent')
      getSortUrlRecentRelease('title', '2018', 'false', '10');
    else
      getSortUrl('', 'false', 'false', '10')

  }, [sortInput, topInput, resultURL])

  function getSortUrl(sortPriority: string, sortByTitle: String, sortByRating: string, limit: string) {
    const url = `${resultURL}&sortPriority=${sortPriority}&sortByTitle=${sortByTitle}&sortByRating=${sortByRating}&limit=${limit}`;
    setCurrentURL(url);
    fetch(url)
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
  }

  function getSortUrlRecentRelease(sortPriority: string, year: String, sortByRating: string, limit: string) {
    setCurrentURL(`${resultURL} &sortPriority=${sortPriority}&title=${year}&sortByRating=${sortByRating}&limit=${limit}`)
    fetch(`${resultURL}&sortPriority=${sortPriority}&title= ${year}&sortByRating=${sortByRating}&limit=${limit}`)
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
  } 

  const onHeaderInputSubmit = () => {
    setPage(1);
    setResultURL(`${TMDB_API }?title=${headerInputTitle}`);
    setIsLoaded(false);
    fetch(TMDB_API + `?title=${headerInputTitle}`)
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
      {isLoaded ?
        <>
          {notFound ? <NotFound /> :
            <div className="movies-results-container">
              <h6 className="showing-h6">Showing results</h6>
              <ResultsList resultsData={movies} apiUrl={props.apiUrl}></ResultsList>
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