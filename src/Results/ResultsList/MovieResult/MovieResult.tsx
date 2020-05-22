import React from 'react';
import './Results.css';
import SingleMovie from '../../../shared/SingleMovie/SingleMovie';
import { MovieDataProps } from '../../../HomePage/RecentRelease/types';

function MovieResult(movieProp: MovieDataProps) {
  const movieData = movieProp.movieData;
  return (
    <div className="single-movie-container">
        <img src={movieData.imgPath}/>
        <SingleMovie movieData={movieProp.movieData}></SingleMovie>
    </div>
  );
}

export default MovieResult;
