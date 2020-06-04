import React from 'react';
import './PeopleLiked.css';
import LikedCircle from './LikedCircle';
import {PeopleLikedProps} from './types';

function PeopleLiked(props: PeopleLikedProps) {
    const finalRating = Number(Number(props.data).toPrecision(2));
    return (
        <div className="people-liked-container">
            <LikedCircle data={finalRating}></LikedCircle>
            {
                props.displayBottomTag ?
                (<p className="people-liked-p">liked this</p>): <></>
            }
        </div>
    );
}

export default PeopleLiked;
