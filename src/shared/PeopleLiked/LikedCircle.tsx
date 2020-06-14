import React from 'react';
import describeArc from './svgUtils.js'
import './PeopleLiked.css';
import {LikedCircleProps} from './types';

function LikedCircle(props: LikedCircleProps) {
    const magicNumber = (Math.random() *100).toPrecision(2);
    const likedRating = props.data ? props.data : magicNumber;
    return (
        <div>
            <svg width="45px" height="44px" viewBox="0 0 45 44" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-162.000000, -306.000000)">
                        <g id="qualification" transform="translate(155.000000, 300.000000)">
                            <g id="Group-5">
                                <g id="Circle-Graph">
                                    <circle id="Oval-2" stroke="#040000" strokeWidth="2" cx="29.44" cy="28.16" r="20.16"></circle>
                                    <mask id="mask-2" fill="white">
                                        <use xlinkHref="#path-1"></use>
                                    </mask>
                                    <g id="Rectangle-3"></g>
                                    <path fill="none" stroke="#FFFF00" strokeWidth="2" id="path-1" d={describeArc(likedRating)}/>
                                </g>
                                <text id="85%" fontFamily="Rubik-Medium, Rubik" fontSize="11.52" fontWeight="400" letterSpacing="0.192000008" fill="#FFE000">
                                    <tspan x="16.84" y="31.76">
                                        {likedRating + '%'}
                                    </tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
}

export default LikedCircle;
