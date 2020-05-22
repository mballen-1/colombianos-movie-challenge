import React from 'react';
import './FanFavourites.css';
import { FavoritesProps } from './types';
import { Button } from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { SingleMovieProp } from '../../shared/SingleMovie/types';

function FanFavourites(props: FavoritesProps) {

  const fanFavorites = props.favoritesData.map(
    (movie : SingleMovieProp) => (
      <div>
        <Button className="single-favorite">
          <img src={movie.imgPath} width='250px' height='375px'/>
        </Button>
        <h3>{movie.movieTitle}</h3>
        <div className="fav-release">
          <p>{movie.releaseDate}</p>
          <p>{movie.genre}</p>
        </div>
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
        <h4>Fan Favorites</h4>
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
