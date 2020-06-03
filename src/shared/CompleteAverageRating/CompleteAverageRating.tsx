import React from 'react';
import './CompleteAverageRating.css'
import AverageRatingProps from '../AverageRating/types';
import Rating from '@material-ui/lab/Rating';
import { withStyles } from '@material-ui/core/styles';

const StyledRating = withStyles({
    root: {
        color: '#ffe000',
        stroke: '#ffe000'
    }
})(Rating);

function CompleteAverageRating(props: AverageRatingProps) {
    const finalRating = Number(props.data / 10).toPrecision(2);
    return (
        <div className="complete-average__display recent-release-score__font">
            <StyledRating value={Number(finalRating)} readOnly name="half-rating-read" precision={0.5}/>
            <p className="complete-rating-p">{finalRating}</p>
            <p className="complete-avg-rating-p">Avg Score</p>
        </div>
    );
}

export default CompleteAverageRating;
