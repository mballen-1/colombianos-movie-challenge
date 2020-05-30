import React from 'react';
import './SingleMovie.css';
import ScoreIcon from '@material-ui/icons/Score';
import { MovieDataProps } from '../../HomePage/RecentRelease/types';

function SingleMovie(props: MovieDataProps) {
  const data = props.movieData;
  const backgroundUrl = data.poster_path;
  return (
            <div className="single-movie-container">
                <img src={backgroundUrl} className="single-movie-img" alt='single-movie-background'></img>
                <div className="single-movie-detail">
                    <h3 className="single-movie-title">{data.title}</h3>
                    <div className="single-movie-stats">
                        <div className="single-movie-score">
                            <ScoreIcon style={{ color: '#ffe000' }}></ScoreIcon>
                        </div>
                        <div>
                            <p className="m0">{data.release_date}</p>
                            <p className="m0">{data.genres} </p>
                            <p className="m0">{data.duration}</p>
                        </div>
                    </div>
                    
                    <div className="single-movie-overview">
                        {data.overview}
                    </div>
                </div>
            </div>
  );
}

export default SingleMovie;
