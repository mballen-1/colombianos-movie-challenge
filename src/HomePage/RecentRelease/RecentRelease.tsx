import React from 'react';
import './RecentRelease.css';
import ScoreIcon from '@material-ui/icons/Score';
import { MovieDataProps } from './types';

function RecentRelease(props: MovieDataProps) {
  const data = props.movieData;
  const backgroundUrl = data.poster_path;
  return (
    <div className="release-container">
        <div className="release-detail-container movie-element__opacity half-movie-element__opacity" style={{ backgroundImage: `url(${backgroundUrl})`}} >
            <div className="release-detail__padding release-detail__text">
                <h6 className="release-stats__font">Recent release</h6>
                <h1>{data.title}</h1>
                <div className="release-stats__font">
                    {data.release_date},
                    {data.genres},
                    {data.duration}
                </div>
                <div className="release-user-score release-user-score__font">
                    <ScoreIcon style={{ color: '#ffe000' }}></ScoreIcon>
                    User score
                </div>
                <div className="release-overview">
                    {data.overview}
                </div>
            </div>
        </div>
    </div>
  );
}

export default RecentRelease;
