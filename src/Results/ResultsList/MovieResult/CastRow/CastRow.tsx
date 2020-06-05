import React, { useState } from 'react';
import { CastRowProps } from './types';
import Carousel from 'react-material-ui-carousel'
import './CastRow.css';
import Road from '../../../../shared/Road/Road';

function CastRow(castProps: CastRowProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  const cast = castProps.castList;
  let beatifulPeople = [];
  for (let i = 0; i < cast.length - 5; i += 5) {
    beatifulPeople.push(
      <>
        <div className="cast-row__display">
          <div className="single-cast-container">
            <img width="160px" height="183px" src={cast[i].profile_path} />
            <p className="single-cast-name">{cast[i].name}</p>
            <p className="single-cast-character">{cast[i].character}</p>
          </div>
          <div className="single-cast-container">
            <img width="160px" height="183px" src={cast[i + 1].profile_path} />
            <p className="single-cast-name">{cast[i + 1].name}</p>
            <p className="single-cast-character">{cast[i + 1].character}</p>
          </div>
          <div className="single-cast-container">
            <img width="160px" height="183px" src={cast[i + 2].profile_path} />
            <p className="single-cast-name">{cast[i + 2].name}</p>
            <p className="single-cast-character">{cast[i + 2].character}</p>
          </div>
          <div className="single-cast-container">
            <img width="160px" height="183px" src={cast[i + 3].profile_path} />
            <p className="single-cast-name">{cast[i + 3].name}</p>
            <p className="single-cast-character">{cast[i + 3].character}</p>
          </div>
          <div className="single-cast-container">
            <img width="160px" height="183px" src={cast[i + 4].profile_path} />
            <p className="single-cast-name">{cast[i + 4].name}</p>
            <p className="single-cast-character">{cast[i + 4].character}</p>
          </div>
          {/* <div className="single-cast-container">
            <img width="160px" height="183px" src={cast[i + 5].profile_path} />
            <p className="single-cast-name">{cast[i + 5].name}</p>
            <p className="single-cast-character">{cast[i + 5].character}</p>
          </div> */}
        </div>
      </>
    )
  }

  return (
    <>
      <h4 className="section-heading section-heading__font">Cast</h4>
      {beatifulPeople.length > 0 ?
        <Carousel interval={5000} className="cast-carousel__padding">
          {beatifulPeople}
        </Carousel> :
        <Road/>
      }
    </>
  );
}

export default CastRow;
