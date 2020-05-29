import React from 'react';
import './FanFavourites.css';
import { FavoritesProps } from './types';
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SingleMovieProp } from '../../shared/SingleMovie/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    favouriteButton: {
      width: 355,
      height: 218,
      display: 'block'
    }
  }),
);

function FanFavourites(props: FavoritesProps) {
  const classes = useStyles();
  
  const fanFavorites = props.favoritesData.map(
    (movie : SingleMovieProp) => (
      <div className="single-fav-container" key={movie.movieId}>
        <Button className={classes.favouriteButton} 
          style={
            { 
              backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0)), url(${movie.poster_path})`,
              textAlign: 'left'
            }
          }
        >
          <div className="favorite-detail-container">
            <span className="movie-title">{movie.title}</span>
            <div className="favorite-stats favourite-detail__break favorite-detail__font">
              <p>{movie.release_date}</p>
              <p>{movie.genres}</p>
              <p>{movie.duration}</p>
            </div>
          </div>
        </Button>
      </div>
    )
  );

  const moreFavorites = (
    <Button className="more-buttom">
    <p style={
      { 
        height: '20px',
        color: '#ffe000',
        position: 'relative',
        fontFamily:'FiraSans'
      }}>
      See More
    </p>
      <ArrowDropDownIcon style={
        {
          color: '#ffffff',
          fontSize: 40,
          width: '50px',
          height: '50px',
          fontFamily:'FiraSans'
        }}/>
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
