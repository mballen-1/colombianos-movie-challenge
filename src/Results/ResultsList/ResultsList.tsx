import React from 'react';
import './ResultsList.css';
import SingleMovie from '../../shared/SingleMovie/SingleMovie';
import { SingleMovieProp } from '../../shared/SingleMovie/types';
import { ResultsProps } from '../types';
import { Button } from '@material-ui/core';

function ResultsList(props: ResultsProps) {
  const resultsRenderList = props.resultsData.map((result:SingleMovieProp) => 
      <SingleMovie movieData={result} key={result.movieId}/>
  );
  return (
    <div className="results-container">
      {resultsRenderList}
    </div>
  );
}

export default ResultsList;
