import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Road.css'

function Road() {
  return (
      <div className='road-container'>
          <CircularProgress className='road-circular'/>
      </div>
  );
}

export default Road;