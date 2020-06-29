import React, { useState, useEffect } from 'react';
import './HomePage.css';
import RecentRelease from './RecentRelease/RecentRelease';
import FanFavourites from './Favourites/FanFavourites';
import Genres from './Genres/Genres';
import Header from '../shared/Header/Header';
import { TMDB_API, GENRES_API } from '../constants';
import { GENREIMAGES } from '../constants/images';
import ResultsPage from '../Results/ResultsPage';
import Pagination from '@material-ui/lab/Pagination/Pagination';
import Road from '../shared/Road/Road';
import Footer from '../shared/Footer/Footer';
import { Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { withRouter } from 'react-router-dom';

function HomePage(props: any) {

  const mockReleaseData = {
    poster_path: '',
    title: '',
    release_date: '',
    genres: "",
    runtime: 0,
    overview: "",
    budget: 0,
    movieId: 0,
    rating: 0,
    likedRating: 100
  }

  const initialValue = [{ name: '', backgroundPath: '' }];

  const [genresOnly, setGenresOnly] = useState([]);
  const [genres, setGenres] = useState(initialValue);
  const [movies, setMovies] = useState([]);
  const [recentRelease, setRecentRelease] = useState(mockReleaseData);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [headerInputTitle, setheaderInputTitle] = useState('');
  const [resultsLimit, setResultsLimit] = useState(8);

  const [genreInput, setGenreInput] = useState('');
  const [renderQueryResults, setRenderQueryResults] = useState(false);
  const [resultURL, setResultURL] = useState(TMDB_API);
  const { history } = props;

  // window.scrollTo(0, 0);
  useEffect(() => {
    fetch(`${TMDB_API}?limit=1&title=2018&sortPriority=rating&sortByRating=true`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.length > 0) {
            setRecentRelease(result[0]);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    fetch(`${TMDB_API}?limit=${resultsLimit}&sortPriority=rating&sortByRating=true`)
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

    fetch(GENRES_API)
      .then(res => res.json())
      .then(
        (result) => {
          setGenresOnly(result.genres);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [resultsLimit])

  useEffect(() => {
    if (genres.length === 1 && genresOnly.length > 0)
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
    if (genreInput) {
      setIsLoaded(false);
      const resultsState = {
        headerInputTitle: headerInputTitle,
        genreInput: genreInput
      }
      history.push({
        pathname: '/results',
        search: '',
        state: resultsState
      })
    }
  }, [genreInput])

  useEffect(() => {
    setIsLoaded(false);
    fetch(resultURL)
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
  }, [resultURL])

  const onHeaderInputSubmit = () => {
    if (headerInputTitle) {
      setIsLoaded(false);
      const resultsState = {
        headerInputTitle: headerInputTitle,
        genreInput: genreInput
      }
      history.push({
        pathname: '/results',
        search: '',
        state: resultsState
      })
    }
  }

  const onInputTitleChange = (title: string) => {
    setheaderInputTitle(title);
  }

  const onGenreInputChange = (genre: string) => {
    setIsLoaded(false);
    setGenreInput(genre);
  }

  const genresProps = {
    onGenreInputChange: onGenreInputChange
  }

  const headerProps = {
    onInputTitleChange: onInputTitleChange,
    onHeaderInputSubmit: onHeaderInputSubmit
  }

  const onEndpointRequest = (endpoint: string) => {
    setResultURL(endpoint);
  }

  const validGenre = (item: any) => item.name !== '' && item.name !== '(no genres listed)' && item.name !== 'IMAX'

  const fetchEightMore = () => {
    setIsLoaded(false);
    setResultsLimit(resultsLimit + 8);
  }
  const moreFavorites = (
    <Button onClick={fetchEightMore} id="see-more-button">
      <span className="home-see-more">
        See More
      </span>
      <ArrowDropDownIcon style={{
        fill: '#ffffff'
      }} />
    </Button>
  );

  return (
    <>
      <>
        {isLoaded ?
          <>
            <Header headerData={headerProps} />
            <RecentRelease
              movieData={recentRelease}
              recentRelease={true}
            />
            <Genres
              genresData={genres.filter(item => validGenre(item))}
              genreSelect={genresProps} />
            <FanFavourites favoritesData={movies} />
          </>
          : <Road />
        }
      </>
      {moreFavorites}
      <Footer />
    </>
  );
}

export default withRouter(HomePage);
