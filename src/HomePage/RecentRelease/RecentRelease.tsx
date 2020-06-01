import React from 'react';
import './RecentRelease.css';
import { MovieDataProps } from './types';
import MovieRatingIcon from '../../shared/MovieRatingIcon/MovieRatingIcon';

function RecentRelease(props: MovieDataProps) {
    const data = props.movieData;
    const backgroundUrl = data.poster_path;
    return (
        <div className="release-detail-container" style={{ backgroundImage: `url(${backgroundUrl})` }} >
            <div className="release-detail__padding release-detail__text">
                <h6 className="recent-release__font recent-release__tag">Recent release</h6>
                <h1>{data.title}</h1>
                <div className="recent-release__font">
                    {data.release_date + '  | '}
                    {data.genres + '  | '}
                    {data.duration}
                </div>
                <div className="release-user-score release-user-score__font">
                    <MovieRatingIcon data={data.rating} />
                    User score
                </div>
                <div className="release-overview">
                    {data.overview}
                </div>
            </div>
        </div>
    );
}

export default RecentRelease;
