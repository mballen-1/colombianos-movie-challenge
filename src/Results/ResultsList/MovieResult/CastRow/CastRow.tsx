import React, { useState } from 'react';
import { CastRowProps } from './types';
import Carousel from 'react-material-ui-carousel'
import './CastRow.css';
import Road from '../../../../shared/Road/Road';
import { USER_NOT_FOUND } from '../../../../constants/images';
import { Cast } from '../types';

function CastRow(castProps: CastRowProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const getBackgroundUrlSafe = (bck: string) => {
    return bck ? bck : USER_NOT_FOUND;
  }

  const cast = castProps.castList;
  let beatifulPeople = [];
  if (cast.length < 6) {
    cast.map((cast: Cast) => {
      beatifulPeople.push(
        <div className="single-cast-container" key={cast.cast_id}>
          <img width="160px" height="183px" src={getBackgroundUrlSafe(cast.profile_path)} alt='cast-profile' />
          <p className="single-cast-name" >{cast.name}</p>
          <p className="single-cast-character">{cast.character}</p>
        </div>
      )
    })
  } else {
    for (let i = 0; i < cast.length - 5; i += 5) {
      beatifulPeople.push(
        <>
          <div className="cast-row__display">
            <div className="single-cast-container">
              <img width="160px" height="183px" src={getBackgroundUrlSafe(cast[i].profile_path)} alt="cast-profile"/>
              <p className="single-cast-name">{cast[i].name}</p>
              <p className="single-cast-character">{cast[i].character}</p>
            </div>
            <div className="single-cast-container">
              <img width="160px" height="183px" src={getBackgroundUrlSafe(cast[i + 1].profile_path)} alt="cast-profile"/>
              <p className="single-cast-name">{cast[i + 1].name}</p>
              <p className="single-cast-character">{cast[i + 1].character}</p>
            </div>
            <div className="single-cast-container">
              <img width="160px" height="183px" src={getBackgroundUrlSafe(cast[i + 2].profile_path)} alt="cast-profile"/>
              <p className="single-cast-name">{cast[i + 2].name}</p>
              <p className="single-cast-character">{cast[i + 2].character}</p>
            </div>
            <div className="single-cast-container">
              <img width="160px" height="183px" src={getBackgroundUrlSafe(cast[i + 3].profile_path)} alt="cast-profile"/>
              <p className="single-cast-name">{cast[i + 3].name}</p>
              <p className="single-cast-character">{cast[i + 3].character}</p>
            </div>
            <div className="single-cast-container">
              <img width="160px" height="183px" src={getBackgroundUrlSafe(cast[i + 4].profile_path)} alt="cast-profile"/>
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
  }


  return (
    <>
      <h4 className="section-heading section-heading__font">Cast</h4>
      {cast && beatifulPeople.length > 0 ?
        <Carousel interval={5000} className="cast-carousel__padding" navButtonsAlwaysVisible={true}>
          {beatifulPeople}
        </Carousel> :
        <Road />
      }
    </>
  );
}

export default CastRow;
