import React from 'react';
import './FanFavourites.css';
import { FavoritesProps } from './types';
import { Button, makeStyles, createStyles, Theme } from '@material-ui/core';
import { SingleMovieProp } from '../../shared/SingleMovie/types';
import { Link } from 'react-router-dom';
import PeopleLiked from '../../shared/PeopleLiked/PeopleLiked';
import AverageRating from '../../shared/AverageRating/AverageRating';
import { IMAGE_NOT_FOUND } from '../../constants/images';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    favouriteButton: {
      width: 262,
      height: 268,
      display: 'block',
      textAlign: 'left',
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
  }),
);

function setImage(poster_path: string){
  if (poster_path === "")
   return IMAGE_NOT_FOUND;
  else
    return poster_path;
}

function FanFavourites(props: FavoritesProps) {
  const classes = useStyles();
  const fanFavorites = props.favoritesData.map(
    (movie: SingleMovieProp) => {
      const finalGenres = movie.genres.replace(/\|/gi, ', ');
      const backgroundUrl = setImage(movie.poster_path);
      const finalDuration = Math.floor(movie.runtime / 60) + 'h ' + movie.runtime % 60 + ' mins';  
      return (
        <Link to={{
          pathname: `/movie/${movie.movieId}`,
          state: movie
        }}
          className="movie-anchor"
          key={movie.movieId}
        >
          <div className="single-favorite-container" key={movie.movieId}>
            <Button className={`${classes.favouriteButton} movie-element__opacity button__opacity`}
              style={{ backgroundImage: `url(${backgroundUrl})`}}
            >
              <div className="favorite-detail-container">
                <p className="movie-title">{movie.title}</p>
                <div className="favorite-icon-details__container">
                  <PeopleLiked data={movie.likedRating} displayBottomTag={true} />
                  <AverageRating data={movie.rating} recentRelease={false} />
                  <div className="favorite-detail-data favourite-detail__break favorite-detail__font">
                    <p>{movie.release_date}</p>
                    <p>{finalGenres}</p>
                    <p>{finalDuration}</p>
                  </div>
                </div>
              </div>
            </Button>
          </div>
        </Link>
      )
    }
  );

  return (
    <div className="favorite-main-container">
      <h4 className="section-heading section-heading__font">Fan Favorites</h4>
      <div className="favorite-container">
        {fanFavorites}
      </div>
    </div>
  );
}

export default FanFavourites;
