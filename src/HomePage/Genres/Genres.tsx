import React from 'react';
import './Genres.css';
import { GenresProps, SingleGenreProp } from './types';
import { Button } from '@material-ui/core';

const singleGenreCustomProps = {}

function Genres(props: GenresProps) {
  const genreElements = props.genresData.map(
      (genre: SingleGenreProp) => (
        <div key={Math.random()}>
          <Button className="single-genre" 
            style={
              { backgroundImage: `linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0)), url(${genre.backgroundPath})`,
                marginRight: 40,
                marginBottom: 37,
                position: 'relative',
                zIndex: 0
              }
            }>
            <p style={
               { 
                color: '#ffffff',
                fontFamily: 'FiraSans',
                fontSize: 24,
                fontWeight: 'bold',
                letterSpacing: 0.4,
                position: 'relative',
                zIndex: 1000
              }
              }>
              {genre.name}
             </p>
          </Button>
        </div>
      )
  );
  return (
    <div className="genres-main-container">
      <h4>Genres</h4>
      <div className="genres-container">
          {genreElements}
      </div>
    </div>
  );
}

export default Genres;
