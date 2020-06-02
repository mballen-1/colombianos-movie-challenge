import React from 'react';
import describeArc from './svgUtils.js'
import PeopleLikedProps from "./types"

function PeopleLiked(props: PeopleLikedProps) {
    const finalRating = Number(props.data / 10).toPrecision(3);
    return (
        <div>
            <svg width="45px" height="44px" viewBox="0 0 45 44" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className='movie-rating-icon'>
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
                                    <path fill="none" stroke="#FFFF00" stroke-width="2" id="path-1" d={describeArc(finalRating)}/>
                                </g>
                                <text id="85%" fontFamily="Rubik-Medium, Rubik" fontSize="11.52" fontWeight="400" letterSpacing="0.192000008" fill="#FFE000">
                                    <tspan x="18.84" y="31.76">
                                        85%
                                    </tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
            {
                props.displayBottomTag ?
                (<p className="people-liked-p">liked this</p>): <></>
            }
        </div>
    );
}

export default PeopleLiked;
