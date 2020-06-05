import React, { useEffect, useState } from 'react';
import { YEARLY_RATINGS, CAST_API } from '../../../constants/index'
import BumpGraph from './GraphComponent';
import './MovieResult.css';
import Header from '../../../shared/Header/Header';
import Footer from '../../../shared/Footer/Footer';
import RecentRelease from '../../../HomePage/RecentRelease/RecentRelease';
import Road from '../../../shared/Road/Road';
import { CastResponse } from './types';
import CastRow from './CastRow/CastRow';

function MovieResult(props: any) {
  const {
    location: {
      state: {
        budget,
        genres,
        movieId,
        overview,
        poster_path,
        rating,
        release_date,
        title,
        duration,
        likedRating
      }
    },
    match: {
      params: { id }
    },
  } = props;

  const [graphData, setData] = useState({
    id: '',
    data: []
  })

  useEffect(() => {
    fetch(`${YEARLY_RATINGS}/${id}`)
      .then(res => res.json())
      .then(
        (result) => {
          let data = result.ratings.reduce((acc: any, curr: any) => (
            [...acc, { x: curr.year, y: curr.rating / 10 }]
          ), [])
          const finish = data[0].x
          if (Object.keys(data).length < 5) {
            for (let year = data[0].x; year > finish - 5; year--) {
              data = [{ x: year - 1, y: 0 }, ...data]
            }
          }
          setData({
            id: title,
            data,
          })
        },
        (error) => {
          console.log(error);
        }
      )
    fetch(CAST_API + `${id}`)
      .then(res => res.json())
      .then(
        (result :CastResponse) => {
          setIsLoaded(true);
          setCast(result.cast);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, [id, title])

  const initialCast = [ 
      {
        cast_id: 0,
        character: '',
        name: '',
        profile_path: ''
      }
  ];

  const [headerInputTitle, setheaderInputTitle] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState(initialCast);

  console.log(cast);

  const movie = {
    budget,
    genres,
    movieId,
    overview,
    poster_path,
    rating,
    release_date,
    title,
    duration,
    likedRating
  }

  return (
    <>
      {
        isLoaded ?
          (
            <>
              {/* <Header></Header> */}
              <RecentRelease movieData={movie} />
              <div className="movie-result-cast">
                <CastRow castList={cast}/>
              </div>
              <div className="movie-result-synopsis">
                <h4 className="section-heading section-heading__font">Synopsis</h4>
                <p className="movie-result-overview-p">
                  {overview}
                </p>
              </div>
              <div>
                <h4 className="section-heading section-heading__font">Ratings Over time</h4>
                <div className="movie-result-wrapper">
                  <BumpGraph data={[graphData]} className="movie-result-wrapper" />
                </div>
              </div>
              <Footer></Footer>
            </>
          ) : <Road />
      }

    </>
  );
}

export default MovieResult;
