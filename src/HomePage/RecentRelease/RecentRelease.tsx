import React from 'react';
import './RecentRelease.css';
import { MovieDataProps } from './types';
import PeopleLiked from '../../shared/PeopleLiked/PeopleLiked';
import CompleteAverageRating from '../../shared/CompleteAverageRating/CompleteAverageRating';
import { IMAGE_NOT_FOUND } from '../../constants/images';
import { Link } from 'react-router-dom';
import SeeMoreLess from '../../shared/SeeMoreLess/SeeMoreLess';

function setImage(poster_path: string) {
    if (poster_path === "")
        return IMAGE_NOT_FOUND;
    else
        return poster_path;
}

function RecentRelease(props: MovieDataProps) {

    const data = props.movieData;
    const recentRelease = props.recentRelease;
    const finalGenres = data.genres.replace(/\|/gi, ', ');
    const backgroundUrl = setImage(data.poster_path);
    const finalDuration = Math.floor(data.runtime / 60) + 'h ' + data.runtime % 60 + 'mins';  

    return (
        <div className={`release-detail-container `}
            style={{ backgroundImage: `url(${backgroundUrl})` }} >
            <div className={`${!recentRelease ? 'recent-release__filter' : ''}`}>

            </div>
            <div className="release-detail__padding release-detail__text">
                {recentRelease ?
                    <h6 className="recent-release__font recent-release__tag">Recent release</h6> : <></>
                }
                <Link to={{
                    pathname: `/movie/${data.movieId}`,
                    state: data
                }}
                    className="movie-anchor"
                    key={data.movieId}
                >
                    <h1>{data.title}</h1>
                </Link>

                <div className="recent-release__font">
                    {data.release_date + '  | '}
                    {finalGenres + '  | '}
                    {finalDuration}
                </div>
                <div className="release-user-score release-user-score__font">
                    <PeopleLiked data={data.likedRating} displayBottomTag={false} />
                    <span className="release-liked-span recent-release-score__font">Users liked this movie</span>
                    <CompleteAverageRating data={data.rating} recentRelease={true} />
                </div>
                <div className="release-overview">
                    <SeeMoreLess overview={data.overview} />
                </div>
            </div>
        </div>
    );
}

export default RecentRelease;
