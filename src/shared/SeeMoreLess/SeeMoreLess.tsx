import React, { useState, useEffect } from 'react';
import { SeeMoreLessProps } from './types';
import './SeeMoreLess.css';



function SeeMoreLess(props: SeeMoreLessProps) {
    const overview = props.overview;
    const [propsOverview, setPropsOverview] = useState(overview);
    const [overviewIsTooLong, setOverviewIsTooLong] = useState(false);
    const [overviewFirstPart, setOverviewFirstPart] = useState(overview);
    const [overviewSecondPart, setOverviewSecondPart] = useState('');
    const [displaySecondPart, setDisplaySecondPart] = useState(false);

    useEffect(() => {
        setPropsOverview(overview);
        setOverviewIsTooLong(overview.length > 245);
        if (overview.length > 245) {
            setOverviewFirstPart(overview.slice(0, 245));
            const secondPartLength = overview.length - 245;
            setOverviewSecondPart(overview.slice(-secondPartLength));
            setDisplaySecondPart(true);
        }
    }, [overview]);

    const displayElementClass = 'see-more__display';
    const hideElementClass = 'see-more__hide';

    const toggleDisplaySecondPart = () => {
        setDisplaySecondPart(!displaySecondPart);
    }

    const overviewRender =
        overviewIsTooLong ?
            (<p>
                {overviewFirstPart}
                <span
                    className={displaySecondPart ? displayElementClass + ' see-more-span' : hideElementClass}
                    onClick={toggleDisplaySecondPart}
                >
                    ...see more
                </span>
                <span className={displaySecondPart ? hideElementClass : displayElementClass}>
                    {overviewSecondPart}
                </span>
                <span
                    className={displaySecondPart ? hideElementClass : displayElementClass + ' see-more-span'}
                    onClick={toggleDisplaySecondPart}
                >
                    {` see less...`}
                    </span>
            </p>)
            : (<p>
                {propsOverview}
            </p>);

    return (
        <div>
            {overviewRender}
        </div>
    );
}

export default SeeMoreLess;
