import React from 'react';
import './Genres.css';
import { GenresProps, SingleGenreProp } from './types';
import { Button } from '@material-ui/core';

const singleGenreCustomProps = {}

function Genres(props: GenresProps) {
  const genreElements = props.genresData.map(
      (genre: SingleGenreProp) => (
        <>
          <div key={Math.random()}>
            <Button className="single-genre single-genre__font movie-element__opacity" 
              style={
                { 
                  backgroundImage: `url(${genre.backgroundPath})`,
                  marginRight: 40,
                  marginBottom: 37
                }
              }>
            <span className="genre-name">
              {genre.name}
            </span>
            </Button>
          </div>
        </>
      )
  );
  return (
    <div className="genres-main-container">
      <h4 className="section-heading section-heading__font">Genres</h4>
      <div className="genres-container">
          {genreElements}
      </div>
    </div>
  );
}

export default Genres;
