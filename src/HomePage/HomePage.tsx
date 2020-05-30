import React, { useState, useEffect } from 'react';
import './HomePage.css';
import RecentRelease from './RecentRelease/RecentRelease';
import background from '../assets/images/GAC_Parasite3.jpg';
import FanFavourites from './Favourites/FanFavourites';
import Genres from './Genres/Genres';
import Header from '../shared/Header/Header';
import { TMDB_API, PROXY_URL } from '../constants';
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

  const genresMockData = [
    {
      name: 'drama',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm8Wq1Wq4usW2gRvdoMk3MJx3wSaIXpJKjx_q7iEYD_1hhca8&usqp=CAU'
    },
    {
      name: 'animation',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx83lvojY3jM2CZu1zTT-fbD9klACcnKg-mp5W5kPd-EsWyurH&usqp=CAU'
    },
    {
      name: 'drama',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm8Wq1Wq4usW2gRvdoMk3MJx3wSaIXpJKjx_q7iEYD_1hhca8&usqp=CAU'
    },
    {
      name: 'animation',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx83lvojY3jM2CZu1zTT-fbD9klACcnKg-mp5W5kPd-EsWyurH&usqp=CAU'
    },
    {
      name: 'drama',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm8Wq1Wq4usW2gRvdoMk3MJx3wSaIXpJKjx_q7iEYD_1hhca8&usqp=CAU'
    },
    {
      name: 'animation',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx83lvojY3jM2CZu1zTT-fbD9klACcnKg-mp5W5kPd-EsWyurH&usqp=CAU'
    },
    {
      name: 'drama',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm8Wq1Wq4usW2gRvdoMk3MJx3wSaIXpJKjx_q7iEYD_1hhca8&usqp=CAU'
    },
    {
      name: 'animation',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx83lvojY3jM2CZu1zTT-fbD9klACcnKg-mp5W5kPd-EsWyurH&usqp=CAU'
    },
    {
      name: 'drama',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQXm8Wq1Wq4usW2gRvdoMk3MJx3wSaIXpJKjx_q7iEYD_1hhca8&usqp=CAU'
    },
    {
      name: 'animation',
      backgroundPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTx83lvojY3jM2CZu1zTT-fbD9klACcnKg-mp5W5kPd-EsWyurH&usqp=CAU'
    }
  ];
  
  // const [genres, setGenres] = useState([]);
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

  const renderQueryResults = false;

  const onInputTitleChange = (title : string) => {
    setheaderInputTitle(title);
  }

  const headerProps = {
      onInputTitleChange: onInputTitleChange
  }

  console.log(headerInputTitle);
  

  return (
    <>
      <Header
        headerData={headerProps}
      /> 
      { renderQueryResults ? <ResultsPage/> : 
        <>
          <RecentRelease movieData={mockReleaseData}></RecentRelease>
          <Genres genresData={genresMockData}></Genres> 
          <FanFavourites favoritesData={movies}></FanFavourites>
        </>
      }
    </>
  );
}

export default HomePage;
