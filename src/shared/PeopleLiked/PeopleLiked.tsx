import React from 'react';
import './PeopleLiked.css';
import LikedCircle from './LikedCircle';
import {PeopleLikedProps} from './types';

function PeopleLiked(props: PeopleLikedProps) {
    let likedRating = props.data
    return (
        <div className="people-liked-container">
            <LikedCircle data={likedRating}></LikedCircle>
            {
                props.displayBottomTag ?
                (<p className="people-liked-p">liked this</p>): <></>
            }
        </div>
    );
}

export default PeopleLiked;
