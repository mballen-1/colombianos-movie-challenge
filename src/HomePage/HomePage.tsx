import React, { useState, useEffect } from 'react';
import './HomePage.css';
import RecentRelease from './RecentRelease/RecentRelease';
import background from '../assets/images/GAC_Parasite3.jpg';
import FanFavourites from './Favourites/FanFavourites';
import Genres from './Genres/Genres';
import Header from '../shared/Header/Header';
import { TMDB_API, GENRES_API, PROXY_URL } from '../constants';
import {GENREIMAGES} from '../constants/images';
import ResultsPage from '../Results/ResultsPage';

export const mockReleaseData = {
  poster_path: background,
  title: 'Parasite',
  release_date: '11/01/2019',
  genres: "Comedy, Thriller, Drama",
  duration: "2h 15 min",
  overview: "The Kim family—father Ki-taek, mother Chung-sook, daughter Ki-jung and son Ki-woo—live in a small semi-basement apartment (banjiha)"
}

function HomePage() {
  
  
  const mockReleaseData = {
    poster_path: background,
    title: 'Parasite',
    release_date: '11/01/2019',
    genres: "Comedy, Thriller, Drama",
    duration: "2h 15 min",
    overview: "The Kim family—father Ki-taek, mother Chung-sook, daughter Ki-jung and son Ki-woo—live in a small semi-basement apartment (banjiha)",
    budget: 30000000000000,
    movieId: 5,
    rating: 7.0
  }

  const initialValue = [{name: '', backgroundPath: ''}];

  const [genresOnly, setGenresOnly] = useState([]);
  const [genres, setGenres] = useState(initialValue);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayHomeView, setdisplayHomeView ] = useState(true);
  const [headerInputTitle, setheaderInputTitle ] = useState('');
  const [resultsLimit, setResultsLimit] = useState(27);  

  useEffect(() => {
    fetch(PROXY_URL + TMDB_API + `?limit=${resultsLimit}`)
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
  }, [])

  useEffect(() => {
    fetch(PROXY_URL + GENRES_API)
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
    if(genres.length == 1)
      genresOnly.map( (g) => setGenres( r => 
        [ ...r,
          {
            name: g,
            backgroundPath: GENREIMAGES(g)
          }
        ]
      ))
  })

  const renderQueryResults = false;

  const onInputTitleChange = (title : string) => {
    setheaderInputTitle(title);
  }

  // const onHeaderFormSubmit = () => {

  // }

  const headerProps = {
      onInputTitleChange: onInputTitleChange
  }

  return (
    <>
      <Header
        headerData={headerProps}
      /> 
      { renderQueryResults ? <ResultsPage/> : 
        <>      
          <RecentRelease movieData={mockReleaseData}></RecentRelease>
          <Genres genresData={genres.filter(item => item.name != '' && item.name != '(no genres listed)' && item.name != 'IMAX')}></Genres> 
          <FanFavourites favoritesData={movies}></FanFavourites>
        </>
      }
    </>
  );
}

export default HomePage;
