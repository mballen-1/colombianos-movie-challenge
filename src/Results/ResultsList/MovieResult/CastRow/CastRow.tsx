import React from 'react';
import { CastRowProps } from './types';
import { Cast } from '../types';

function CastRow(castProps: CastRowProps) {
  console.log('castProps', castProps.castList);
  const cast = castProps.castList;
  const renderedSix = cast.map((cst: Cast) => (
    <div>
      <img width="160px" height="183px" src={cst.profile_path} />
      <p>{cst.name}</p>
      <p>{cst.character}</p>
    </div>

  ));

  return (
    <>
      <h4 className="section-heading section-heading__font">Cast</h4>
      <div className=""></div>
      {/* {renderedSix} */}
    </>
  );
}

export default CastRow;
