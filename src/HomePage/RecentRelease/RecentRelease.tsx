import React from 'react';
import './RecentRelease.css';
import { MovieDataProps } from './types';
import PeopleLiked from '../../shared/PeopleLiked/PeopleLiked';
import CompleteAverageRating from '../../shared/CompleteAverageRating/CompleteAverageRating';

function RecentRelease(props: MovieDataProps) {
    const data = props.movieData;
    const backgroundUrl = data.poster_path;
    const finalGenres = data.genres.replace(/\|/gi, ', ');
    return (
        <div className="release-detail-container" style={{ backgroundImage: `url(${backgroundUrl})` }} >
            <div className="release-detail__padding release-detail__text">
                <h6 className="recent-release__font recent-release__tag">Recent release</h6>
                <h1>{data.title}</h1>
                <div className="recent-release__font">
                    {data.release_date + '  | '}
                    {finalGenres + '  | '}
                    {data.duration}
                </div>
                <div className="release-user-score release-user-score__font">
                    <PeopleLiked data={data.likedRating} displayBottomTag={false} />
                    <span className="release-liked-span recent-release-score__font">Users liked this movie</span>
                    <CompleteAverageRating data={data.rating} recentRelease={true}/>
                </div>
                <div className="release-overview">
                    {data.overview}
                </div>
            </div>
        </div>
    );
}

export default RecentRelease;
