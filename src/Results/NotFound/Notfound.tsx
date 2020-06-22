import React from 'react';
import { NOTFOUND } from '../../constants/images';
import './NotFound.css'

function NotFound() {
  return (
      <div className='not-found-container'>
          <div className='not-found'> We have not found any results :-( </div>
          <img className='notfound-img' src={NOTFOUND} alt='not-found'/>
      </div>
  );
}

export default NotFound;