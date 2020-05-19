import React from 'react';
import './RecentRelease.css';
import ScoreIcon from '@material-ui/icons/Score';
import { MovieDataProps } from './types';

function RecentRelease(props: MovieDataProps) {
  const data = props.movieData;
  const backgroundUrl = data.imgPath;
  return (
    <div className="release-container">
        <div className="release-detail-container" style={{ backgroundImage: `url(${backgroundUrl})`}}>
            <div className="release-detail-left">
                <h6>Recent release</h6>
                <h1>{data.movieTitle}</h1>
                <div>
                    {data.releaseDate},
                    {data.genre},
                    {data.duration}
                </div>
                <div className="release-score">
                    <ScoreIcon style={{ color: '#ffe000' }}></ScoreIcon>
                    User score
                </div>
                <div className="release-synopsis">
                    {data.synopsis}
                </div>
            </div>
        </div>
    </div>
  );
}

export default RecentRelease;
