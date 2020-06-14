import React from 'react';
import './AverageRating.css'
import AverageRatingProps from './types';
import SingleStar from './SingleStar';

function AverageRating(props: AverageRatingProps) {
    const finalRating = Number(props.data * 10).toPrecision(2);
    return (
        <div className={props.recentRelease ? 'recent-release-flex' : 'average-rating__display'}>
            <SingleStar/>
            {
                props.recentRelease ?
                    (<div className="recent-release-score__font recent-release-score__width">
                        <span className="average-span__margin">{finalRating}</span>
                        <span className="average-span__margin">Avg Score</span>
                    </div>) : (
                        <>
                            <p className="people-rating-p">{finalRating}</p>
                            <p className="people-liked-p">avg rating</p>
                        </>)
            }

        </div >
    );
}

export default AverageRating;
