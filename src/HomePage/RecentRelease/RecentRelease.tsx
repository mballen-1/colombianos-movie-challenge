import React, { useState, useEffect } from 'react';
import './RecentRelease.css';
import { MovieDataProps } from './types';
import PeopleLiked from '../../shared/PeopleLiked/PeopleLiked';
import CompleteAverageRating from '../../shared/CompleteAverageRating/CompleteAverageRating';
import { IMAGE_NOT_FOUND } from '../../constants/images';
import { Link } from 'react-router-dom';

function setImage(poster_path: string) {
    if (poster_path === "")
        return IMAGE_NOT_FOUND;
    else
        return poster_path;
}

function RecentRelease(props: MovieDataProps) {

    const data = props.movieData;
    const recentRelease = props.recentRelease;
    const finalGenres = data.genres.replace(/\|/gi, ', ');
    const backgroundUrl = setImage(data.poster_path);

    const [propsOverview, setPropsOverview] = useState(data.overview);
    const [overviewIsTooLong, setOverviewIsTooLong] = useState(false);
    const [overviewFirstPart, setOverviewFirstPart] = useState(data.overview);
    const [overviewSecondPart, setOverviewSecondPart] = useState('');
    const [displaySecondPart, setDisplaySecondPart] = useState(false);

    useEffect(() => {
        setPropsOverview(data.overview);
        const newOverview = data.overview;
        setOverviewIsTooLong(newOverview.length > 205);
        if (newOverview.length > 205) {
            setOverviewFirstPart(newOverview.slice(0, 205));
            const secondPartLength = newOverview.length - 205;
            setOverviewSecondPart(newOverview.slice(-secondPartLength));
            setDisplaySecondPart(true);
        }
    }, [data.overview]);

    const displayElementClass = 'release-element__display';
    const hideElementClass = 'release-element__hide';

    const toggleDisplaySecondPart = () => {
        setDisplaySecondPart(!displaySecondPart);
    }

    const overviewRender =
        overviewIsTooLong ?
            (<p>
                {overviewFirstPart}
                <span
                    className={displaySecondPart ? displayElementClass + ' release-see-more-span' : hideElementClass}
                    onClick={toggleDisplaySecondPart}
                >
                    ...see more
                </span>
                <span className={displaySecondPart ? hideElementClass : displayElementClass}>
                    {overviewSecondPart}
                </span>
                <span
                    className={displaySecondPart ? hideElementClass : displayElementClass + ' release-see-more-span'}
                    onClick={toggleDisplaySecondPart}
                >
                    see less...
                    </span>
            </p>)
            : (<p>
                {propsOverview}
            </p>);

    return (
        <div className={`release-detail-container  ${!recentRelease ? 'recent-release__filter' : ''}`}
            style={{ backgroundImage: `url(${backgroundUrl})` }} >
            <div className="release-detail__padding release-detail__text">
                {recentRelease ?
                    <h6 className="recent-release__font recent-release__tag">Recent release</h6> : <></>
                }
                <Link to={{
                    pathname: `/movie/${data.movieId}`,
                    state: data
                }}
                    className="movie-anchor"
                    key={data.movieId}
                >
                    <h1>{data.title}</h1>
                </Link>

                <div className="recent-release__font">
                    {data.release_date + '  | '}
                    {finalGenres + '  | '}
                    {data.duration}
                </div>
                <div className="release-user-score release-user-score__font">
                    <PeopleLiked data={data.likedRating} displayBottomTag={false} />
                    <span className="release-liked-span recent-release-score__font">Users liked this movie</span>
                    <CompleteAverageRating data={data.rating} recentRelease={true} />
                </div>
                <div className="release-overview">
                    {overviewRender}
                </div>
            </div>
        </div>
    );
}

export default RecentRelease;
