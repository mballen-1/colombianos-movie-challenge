import React from 'react';
import './MovieMainContent.css';
import { Link } from 'react-router-dom';
import { IMAGE_NOT_FOUND } from '../../../constants/images';
import { MovieDataProps } from '../../../HomePage/RecentRelease/types';
import PeopleLiked from '../../../shared/PeopleLiked/PeopleLiked';
import CompleteAverageRating from '../../../shared/CompleteAverageRating/CompleteAverageRating';
import SeeMoreLess from '../../../shared/SeeMoreLess/SeeMoreLess';

function setImage(poster_path: string) {
    if (poster_path === "")
        return IMAGE_NOT_FOUND;
    else
        return poster_path;
}

function MovieMainContent(props: MovieDataProps) {

    const data = props.movieData;
    const recentRelease = props.recentRelease;
    const finalGenres = data.genres.replace(/\|/gi, ', ');
    const backgroundUrl = setImage(data.poster_path);
    const finalDuration = Math.floor(data.runtime / 60) + 'h ' + data.runtime % 60 + ' mins';

    return (
        <div className={`release-detail-container `}
            style={{ backgroundImage: `url(${backgroundUrl})` }} >
            <div className="movie-main-content__filter">
            </div>
            <div className="movie-main-content__padding release-detail__text movie-main-container">
                <img
                    src={`${backgroundUrl}`}
                    width="32%"
                    height="371px"
                    className="movie-main__img"
                />
                <div>
                    <h1 className={'single-result__font movie-main-heading__padding'}>
                        {data.title}
                    </h1>
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
        </div>
    );
}

export default MovieMainContent;
