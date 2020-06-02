import React from 'react';
import './FanFavourites.css';
import { FavoritesProps } from './types';
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SingleMovieProp } from '../../shared/SingleMovie/types';
import PeopleLiked from '../../shared/PeopleLiked/PeopleLiked';
import AverageRating from '../../shared/AverageRating/AverageRating';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    favouriteButton: {
      width: 261,
      height: 267,
      display: 'block',
      textAlign: 'left'
    }
  }),
);

function FanFavourites(props: FavoritesProps) {
  const classes = useStyles();
  const fanFavorites = props.favoritesData.map(
    (movie: SingleMovieProp) => {
      const finalGenres = movie.genres.replace(/\|/gi, ', ');
      return (
        <div className="single-favorite-container" key={movie.movieId}>
          <Button className={`${classes.favouriteButton} movie-element__opacity button__opacity`}
            style={
              {
                backgroundImage: `url(${movie.poster_path})`
              }
            }
          >
            <div className="favorite-detail-container">
              <p className="movie-title">{movie.title}</p>
              <div className="favorite-icon-details__container">
                <PeopleLiked data={movie.rating} displayBottomTag={true}/>
                <AverageRating data={movie.rating} recentRelease={false}/>
                <div className="favorite-detail-data favourite-detail__break favorite-detail__font">
                  <p>{movie.release_date}</p>
                  <p>{finalGenres}</p>
                  <p>{movie.duration}</p>
                </div>
              </div>
            </div>
          </Button>
        </div>
      )
    }
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
