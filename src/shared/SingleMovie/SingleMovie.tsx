import React from 'react';
import './SingleMovie.css';
import ScoreIcon from '@material-ui/icons/Score';
import { MovieDataProps } from '../../HomePage/RecentRelease/types';

function SingleMovie(props: MovieDataProps) {
  const data = props.movieData;
  const backgroundUrl = data.imgPath;
  return (
            <div className="single-movie-container">
                <img src={data.imgPath} className="single-movie-img"></img>
                <div className="single-movie-detail">
                    <h3 className="single-movie-title">{data.movieTitle}</h3>
                    <div className="single-movie-stats">
                        <div className="single-movie-score">
                            <ScoreIcon style={{ color: '#ffe000' }}></ScoreIcon>
                        </div>
                        <div>
                            <p className="m0">{data.releaseDate}</p>
                            <p className="m0">{data.genre} </p>
                            <p className="m0">{data.duration}</p>
                        </div>
                    </div>
                    
                    <div className="single-movie-synopsis">
                        {data.synopsis}
                    </div>
                </div>
            </div>
  );
}

export default SingleMovie;
