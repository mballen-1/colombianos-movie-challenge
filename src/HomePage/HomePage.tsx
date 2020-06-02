import React, { useState, useEffect } from 'react';
import './HomePage.css';
import RecentRelease from './RecentRelease/RecentRelease';
import FanFavourites from './Favourites/FanFavourites';
import Genres from './Genres/Genres';
import Header from '../shared/Header/Header';
import { TMDB_API, GENRES_API } from '../constants';
import { GENREIMAGES } from '../constants/images';
import ResultsPage from '../Results/ResultsPage';

function HomePage() {

  const mockReleaseData = {
    poster_path: '',
    title: '',
    release_date: '',
    genres: "",
    duration: "",
    overview: "",
    budget: 0,
    movieId: 0,
    rating: 0
  }

  const initialValue = [{ name: '', backgroundPath: '' }];

  const [genresOnly, setGenresOnly] = useState([]);
  const [genres, setGenres] = useState(initialValue);
  const [movies, setMovies] = useState([]);
  const [recentRelease, setRecentRelease] = useState(mockReleaseData);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [headerInputTitle, setheaderInputTitle] = useState('');
  const [resultsLimit, setResultsLimit] = useState(27);

  const [genreInput, setGenreInput] = useState('');
  const [renderQueryResults, setRenderQueryResults] = useState(false);
  const [resultURL, setResultURL] = useState('');

  useEffect(() => {
    fetch(TMDB_API + `?limit=${resultsLimit}` + `&sort=title&title=2018`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setMovies(result);
          if(result.length > 0){
            setRecentRelease(result[0]);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

    fetch(GENRES_API)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setGenresOnly(result.genres);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  useEffect(() => {
    if (genres.length == 1)
      genresOnly.map((g) => setGenres(r =>
        [...r,
        {
          name: g,
          backgroundPath: GENREIMAGES(g)
        }
        ]
      ))
  }, [genresOnly])

  useEffect(() => {
    if (genreInput != ''){
      setResultURL(TMDB_API + `?limit=${resultsLimit}` + `&genres=` + `${genreInput}`)
      fetch(resultURL)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setMovies(result);
            setRenderQueryResults(true)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  }, [genreInput, resultURL])

  const onHeaderInputSubmit = () => {
    if (headerInputTitle) {
      fetch(TMDB_API + `?limit=${resultsLimit}` + `&title=${headerInputTitle}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setMovies(result);
            setRenderQueryResults(true)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }
  }

  const onInputTitleChange = (title: string) => {
    setheaderInputTitle(title);
  }

  const onGenreInputChange = (genre: string) => {
    setGenreInput(genre);
  }

  const genresProps = {
    onGenreInputChange: onGenreInputChange
  }

  const headerProps = {
    onInputTitleChange: onInputTitleChange,
    onHeaderInputSubmit: onHeaderInputSubmit
  }

  return (
    <>
      <Header headerData={headerProps} />
      {renderQueryResults ?
        <ResultsPage resultsData={movies} apiUrl={resultURL}></ResultsPage> :
        <>
          <RecentRelease movieData={recentRelease}></RecentRelease>
          <Genres
            genresData={genres.filter(item => item.name !== '' && item.name !== '(no genres listed)' && item.name !== 'IMAX')}
            genreSelect={genresProps}></Genres>
          <FanFavourites favoritesData={movies}></FanFavourites>
        </>
      }
    </>
  );
}

export default HomePage;
