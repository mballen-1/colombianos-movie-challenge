import React from 'react';
import './FanFavourites.css';
import { FavoritesProps } from './types';
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SingleMovieProp } from '../../shared/SingleMovie/types';
import MovieRatingIcon from '../../shared/MovieRatingIcon/MovieRatingIcon';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    favouriteButton: {
      width: 261,
      height: 227,
      display: 'block',
      textAlign: 'left'
    }
  }),
);

function FanFavourites(props: FavoritesProps) {
  const classes = useStyles();
  const fanFavorites = props.favoritesData.map(
    (movie: SingleMovieProp) => (
      <Link to={{
        pathname: `/movie/${movie.movieId}`,
        state: movie
      }}>
        <div className="single-favorite-container" key={movie.movieId}>
          <Button className={`${classes.favouriteButton} movie-element__opacity button__opacity`}
              style={
                {
                  backgroundImage: `url(${movie.poster_path})`
                }
              }
          >
            <div className="favorite-detail-container">
              <span className="movie-title">{movie.title}</span>
              <div className="favorite-icon-details__container">
                <MovieRatingIcon data={movie.rating}/>
                <div className="favorite-detail-data favourite-detail__break favorite-detail__font">
                  <p>{movie.release_date}</p>
                  <p>{movie.genres}</p>
                  <p>{movie.duration}</p>
                </div>
            </div>
          </div>
        </Button>
      </div>
    </Link>
    )
  );

  const moreFavorites = (
    <Button className="more-buttom">
      <p className="favorites-see-more">
        See More
    </p>
      <ArrowDropDownIcon style={
        {
          color: '#ffffff',
          fontSize: 40,
          width: '50px',
          height: '50px',
          fontFamily: 'Rubik'
        }} />
    </Button>
  );

  return (
    <div className="favorite-main-container">
      <h4 className="section-heading section-heading__font">Fan Favorites</h4>
      <div className="favorite-container">
        {fanFavorites}
      </div>
      <div>
        {moreFavorites}
      </div>
    </div>
  );
}

export default FanFavourites;
