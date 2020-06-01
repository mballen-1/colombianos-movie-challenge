import React, { useEffect, useState } from 'react';
import { YEARLY_RATINGS } from '../../../constants/index'
import BumpGraph from './GraphComponent';
import './MovieResult.css';

function MovieResult(props) {
  const {
    location: {state : {title}},
    match: {params : {id}}, 
  } = props;
  
  console.log(props)
  const [graphData, setData] = useState({
    label: '',
    data: []
  })

  useEffect(() => {
    fetch(`${YEARLY_RATINGS}/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.ratings)
          const data = result.ratings.reduce((acc, curr) => (
            [...acc, { x: curr.year, y: curr.rating/10}]
          ), [])
          console.log(result.ratings)
          setData({
            id: title,
            data,
          })
        },
        (error) => {
          console.log(error);
        }
      )
  }, [id, title])

  return (
    <div className="movie-graph-wrapper">
      <BumpGraph data={[graphData]} className="movie-graph-wrapper"/>
    </div>
  );
}

export default MovieResult;
