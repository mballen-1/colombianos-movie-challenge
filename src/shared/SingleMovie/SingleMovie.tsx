import React from 'react';
import './SingleMovie.css';
import { MovieDataProps } from '../../HomePage/RecentRelease/types';
import PeopleLikedIcon from '../PeopleLikedIcon/PeopleLikedIcon';

function SingleMovie(props: MovieDataProps) {
    const data = props.movieData;
    const backgroundUrl = data.poster_path;
    return (
        <div className="single-movie-container">
            <img src={backgroundUrl} width="183px" height="139px" alt='single-movie-background' className='single-movie-img'></img>
            <div className="single-movie-detail__font">
                <h3 className="single-movie-title">{data.title}</h3>
                <div className="single-movie-stats">
                    <div className="single-movie-score">
                        <PeopleLikedIcon data={data.rating} />
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
