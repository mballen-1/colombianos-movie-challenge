import React from 'react';
import MovieIconProps from './types';

function MovieRatingIcon(props: MovieIconProps) {
    const finalRating = Number(props.data / 10).toPrecision(3);
    return (
        <>
            <svg width="45px" height="44px" viewBox="0 0 45 44" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className='movie-rating-icon'>
                <title>Group 5</title>
                <desc>Created with Sketch.</desc>
                <defs>
                    <polygon id="path-1" points="6.815 6.9025 29.56375 28.16 29.56375 0.04625 57.6 0.04625 57.6 57.6 2.49800181e-17 57.6"></polygon>
                </defs>
                <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="Desktop-HD" transform="translate(-162.000000, -306.000000)">
                        <g id="qualification" transform="translate(155.000000, 300.000000)">
                            <g id="Group-5">
                                <g id="Circle-Graph">
                                    <circle id="Oval-2" stroke="#040000" strokeWidth="3.2" cx="29.44" cy="28.16" r="20.16"></circle>
                                    <mask id="mask-2" fill="white">
                                        <use xlinkHref="#path-1"></use>
                                    </mask>
                                    <g id="Rectangle-3"></g>
                                    <circle id="Oval-2" stroke="#F0BD22" strokeWidth="3.2" mask="url(#mask-2)" cx="29.44" cy="28.16" r="20.16"></circle>
                                </g>
                                <text id="85%" fontFamily="Rubik-Medium, Rubik" fontSize="11.52" fontWeight="400" letterSpacing="0.192000008" fill="#FFE000">
                                    <tspan x="18.84" y="31.76">
                                        {finalRating}
                                    </tspan>
                                </text>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </>
    );
}

export default MovieRatingIcon;
