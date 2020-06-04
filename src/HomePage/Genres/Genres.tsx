import React from 'react';
import './Genres.css';
import { GenresProps, SingleGenreProp } from './types';
import { Button } from '@material-ui/core';

function Genres(props: GenresProps) {

  function handleInputSubmit(genre: string) {
    props.genreSelect.onGenreInputChange(genre);
    window.scrollTo(0,0);
  }

  const genreElements = props.genresData.map(
    (genre: SingleGenreProp) => (
      <div key={Math.random()}>
        <Button className="single-genre single-genre__font"
          style={
            {
              backgroundImage: `url(${genre.backgroundPath})`,
              marginRight: 40,
              marginBottom: 37
            }
          }
          onClick={() => handleInputSubmit(genre.name)}
          >
          <span className="genre-name">
            {genre.name}
          </span> 
        </Button>
      </div>
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
