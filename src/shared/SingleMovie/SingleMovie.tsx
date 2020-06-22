import React , { useEffect, useState } from 'react';
import './SingleMovie.css';
import { MovieDataProps } from '../../HomePage/RecentRelease/types';
import PeopleLiked from '../PeopleLiked/PeopleLiked';
import CompleteAverageRating from '../CompleteAverageRating/CompleteAverageRating';
import { IMAGE_NOT_FOUND } from '../../constants/images';
import { Link } from 'react-router-dom';
import SeeMoreLess from '../SeeMoreLess/SeeMoreLess';

function SingleMovie(props: MovieDataProps) {
    const data = props.movieData;
    const [backgroundUrl, setBackgroundUrl] = useState(data.poster_path);
    const finalGenres = data.genres.replace(/\|/gi, ', ');
    const finalDuration = Math.floor(data.runtime / 60) + 'h ' + data.runtime % 60 + ' mins';  

    useEffect(() => {
        if(data.poster_path === "")
            setBackgroundUrl(IMAGE_NOT_FOUND);
    },[data]);

    return (
        <div className="single-movie-container">
            <Link to={{
                        pathname: `/movie/
                        ${data.movieId}`,
                        state: data
                        }}
                className="movie-anchor"
                key={data.movieId}
            >
                <img src={backgroundUrl} width="183px" height="127px" alt='single-movie-background' className='single-movie-img'></img>
            </Link>
            <div className="single-movie-detail__font single-movie-detail__container">
                <Link to={{
                            pathname: `/movie/${data.movieId}`,
                            state: data
                            }}
                    className="movie-anchor"
                    key={data.movieId}
                >
                    <h3 className="single-movie-title">{data.title}</h3>
                </Link>
                <div className="single-movie-basic-data__padding">
                    <span>{data.release_date}</span> | 
                    <span className="m-l3">{finalGenres} </span>
                    <span>{finalDuration}</span>
                </div>
                <div className="single-movie-stats">
                    <div className="single-movie-score">
                        <PeopleLiked data={data.likedRating} displayBottomTag={false} />
                        <span className="release-liked-span__width recent-release-score__font single-movie-liked">
                            Users liked this movie
                        </span>
                        <CompleteAverageRating data={data.rating} recentRelease={true}/>
                    </div>
                </div>
                <div className="single-movie-overview">
                    <SeeMoreLess overview={data.overview}/>
                </div>
            </div>
        </div>
    );
}

export default SingleMovie;