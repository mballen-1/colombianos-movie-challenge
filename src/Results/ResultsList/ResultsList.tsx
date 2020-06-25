import React from 'react';
import './ResultsList.css';
import SingleMovie from '../../shared/SingleMovie/SingleMovie';
import { SingleMovieProp } from '../../shared/SingleMovie/types';
import { ResultListProps } from './types';

function ResultsList(props: ResultListProps) {
  const resultsRenderList = props.movies.map((result:SingleMovieProp) => 
      <SingleMovie 
        movieData={result} 
        key={result.movieId}
        recentRelease={false}
        />
  );
  return (
    <div className="results-container">
      {resultsRenderList}
    </div>
  );
}

export default ResultsList;
