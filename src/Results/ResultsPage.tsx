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


function ResultsPage(props: any) {
  const {
    location: {
      state: {
        headerInputTitle,
        genreInput
      }
    }
  } = props;

  const [notFound, setNotFound] = useState(false);
  const [sortSelectOption, setSortSelectOption] = React.useState('sort-by');
  const [topSelectOption, setTopSelectOption] = React.useState('0');
  const [headerInputTitleProps, setheaderInputTitleProps] = useState(headerInputTitle);
  const [genreInputProps, setGenreInputProps] = useState(genreInput);
  const [backendURL, setBackendURL] = useState('');
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const notFound = (!movies || movies.length === 0) && !isLoaded;
    setNotFound(notFound);
  }, [movies])

  const setBackendEndpoint = () => {
    if (genreInputProps && genreInputProps.length > 0) {
      console.log(1);
      setBackendURL(`${TMDB_API}?genres=${genreInputProps}`);
    } else {
      if (headerInputTitleProps && headerInputTitleProps.length > 0) {
        console.log(2);
        setBackendURL(`${TMDB_API}?title=${headerInputTitleProps}`);
      }
    }
    // setBackendURL(`${TMDB_API}?limit=10&sortPriority=rating&sortByRating=true`);
  }

  useEffect(() => {
    if (backendURL === '') {
      setBackendEndpoint();
    }
  })

  useEffect(() => {
    console.log('use effect page');
    // if(backendURL !== '') {
    //   setBackendURL(`${backendURL}&page=${page}`);
    // }
  }, [page]);

  useEffect(() => {
    setIsLoaded(false);
    fetch(backendURL)
      .then(res => res.json())
      .then(
        (result) => {
          setMovies(result);
          setIsLoaded(true);
        },
        (error) => {
          // setIsLoaded(true);
          setError(error);
        }
      )
  }, [backendURL])

  useEffect(() => {
    console.log('topSelectOption', topSelectOption);
    if (!topSelectOption) {
      if (sortSelectOption === 'title')
        requestSortedMovies('title', 'true', 'false', '10');
      else if (sortSelectOption === 'most-recent')
        requestSortedRecentMovies('title', '2018', 'false', '10');
      else // Default sorting
        requestSortedMovies('', 'false', 'false', '10')
    } else {
      if (sortSelectOption === 'title')
        requestSortedMovies('rating', 'true', 'true', topSelectOption);
      else if (sortSelectOption === 'most-recent')
        requestSortedRecentMovies('rating', '2018', 'true', topSelectOption);
      else // Default sorting
        requestSortedMovies('rating', 'false', 'true', topSelectOption);
    }
  }, [sortSelectOption, topSelectOption])

  function requestSortedMovies(
    sortPriority: string,
    sortByTitle: String,
    sortByRating: string,
    limit: string) {
    const url = `${backendURL}&sortPriority=${sortPriority}&sortByTitle=${sortByTitle}&sortByRating=${sortByRating}&limit=${limit}&page=${page}`;
    if (backendURL != '' && url !== backendURL) {
      console.log(4);
      setBackendURL(url);
    }
  }

  function requestSortedRecentMovies(
    sortPriority: string,
    year: String,
    sortByRating: string,
    limit: string) {
    const url = `${backendURL}&sortPriority=${sortPriority}&title=${year}&sortByRating=${sortByRating}&limit=${limit}&page=${page}`;
    if (backendURL != '' && url !== backendURL) {
      console.log(5);
      setBackendURL(url);
    }
  }

  const onHeaderInputSubmit = () => {
    const url = `${TMDB_API}?title=${headerInputTitleProps}&page=${page}`;
    setGenreInputProps('');
    if (url !== backendURL) {
      console.log(6);
      setPage(1);
      setBackendURL(url);
    }
  }

  const onSortInputChange = (sort: string) => {
    setIsLoaded(false);
    if (sort != sortSelectOption) {
      setPage(1);
      setSortSelectOption(sort);
    }
  }

  const onTopsInputChange = (top: string) => {
    setIsLoaded(false);
    if (top != topSelectOption) {
      setPage(1);
      setTopSelectOption(top);
    }
  }

  const filtersProps = {
    onSortInputChange: onSortInputChange,
    onTopsInputChange: onTopsInputChange
  }

  const onInputTitleChange = (title: string) => {
    setheaderInputTitleProps(title);
  }

  const headerProps = {
    onInputTitleChange: onInputTitleChange,
    onHeaderInputSubmit: onHeaderInputSubmit
  }

  const handlePaginationOnChange = (pageValue: number) => {
    if (pageValue !== page) {
      window.scrollTo(0, 0);
      setIsLoaded(false);
      setPage(pageValue);
    }
  };

  console.log('backendURL', backendURL);
  const currentResultsHeading =
    headerInputTitleProps && !genreInputProps ? `${movies.length} results for '${headerInputTitleProps}' search` :
      `${movies.length} results for '${genreInputProps}' search`;

  return (
    <div className="results-container">
      {isLoaded ?
        <>
          <Header headerData={headerProps} />
          <Filters filtersData={filtersProps} apiUrl={backendURL} />
          {notFound ? <NotFound /> :
            <div className="movies-results-container">
              <h2>{currentResultsHeading}</h2>
              <ResultsList
                movies={movies}
              ></ResultsList>
            </div>
          }
          {
            true ? //Fix this with service info
              <Pagination
                className={`movies-results-pagination`}
                color={'primary'}
                count={20}
                onChange={(e, p) => handlePaginationOnChange(p)} page={page} /> :
              <></>
          }

        </>
        : <Road />
      }
    </div>
  );
}

export default ResultsPage;