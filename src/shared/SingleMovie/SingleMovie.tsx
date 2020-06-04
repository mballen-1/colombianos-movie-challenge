import React from 'react';
import './SingleMovie.css';
import { MovieDataProps } from '../../HomePage/RecentRelease/types';
import PeopleLiked from '../PeopleLiked/PeopleLiked';
import CompleteAverageRating from '../CompleteAverageRating/CompleteAverageRating';
import { Button } from '@material-ui/core';

function SingleMovie(props: MovieDataProps) {
    const data = props.movieData;
    const backgroundUrl = data.poster_path;
    const finalGenres = data.genres.replace(/\|/gi, ', ');
    return (
        <div className="single-movie-container">
            <img src={backgroundUrl} width="183px" height="127px" alt='single-movie-background' className='single-movie-img'></img>
            <div className="single-movie-detail__font">
                <h3 className="single-movie-title">{data.title}</h3>
                <div className="single-movie-basic-data__padding">
                    <span>{data.release_date}</span> | 
                    <span className="m-l3">{finalGenres} </span>
                    <span>{data.duration}</span>
                </div>
                <div className="single-movie-stats">
                    <div className="single-movie-score">
                        <PeopleLiked data={data.rating} displayBottomTag={false} />
                        <span className="release-liked-span__width recent-release-score__font single-movie-liked">
                            Users liked this movie
                        </span>
                        <CompleteAverageRating data={data.rating} recentRelease={true}/>
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
