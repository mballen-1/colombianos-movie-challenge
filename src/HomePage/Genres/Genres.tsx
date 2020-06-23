import React from 'react';
import './Genres.css';
import { GenresProps, SingleGenreProp } from './types';
import { Button } from '@material-ui/core';
import Carousel from 'react-material-ui-carousel';

function Genres(props: GenresProps) {

  function handleInputSubmit(genre: string) {
    props.genreSelect.onGenreInputChange(genre);
    window.scrollTo(0, 0);
  }

  let genreElements = [];

  for (let i = 0; i < 18; i += 6) {
    genreElements.push(
      <div className='genres-container' key={Math.random()}>
        <div key={props.genresData[i].name}>
          <Button className="single-genre single-genre__font"
            style={
              {
                backgroundImage: `url(${props.genresData[i].backgroundPath})`,
                marginRight: 40,
                marginBottom: 37
              }
            }
            onClick={() => handleInputSubmit(props.genresData[i].name)}
          >
            <span className="genre-name">
              {props.genresData[i].name}
            </span>
          </Button>
        </div>
        <div key={props.genresData[i + 1].name}>
          <Button className="single-genre single-genre__font"
            style={
              {
                backgroundImage: `url(${props.genresData[i + 1].backgroundPath})`,
                marginRight: 40,
                marginBottom: 37
              }
            }
            onClick={() => handleInputSubmit(props.genresData[i + 1].name)}
          >
            <span className="genre-name">
              {props.genresData[i + 1].name}
            </span>
          </Button>
        </div>
        <div key={props.genresData[i + 2].name}>
          <Button className="single-genre single-genre__font"
            style={
              {
                backgroundImage: `url(${props.genresData[i + 2].backgroundPath})`,
                marginRight: 40,
                marginBottom: 37
              }
            }
            onClick={() => handleInputSubmit(props.genresData[i + 2].name)}
          >
            <span className="genre-name">
              {props.genresData[i + 2].name}
            </span>
          </Button>
        </div>
        <div key={props.genresData[i + 3].name}>
          <Button className="single-genre single-genre__font"
            style={
              {
                backgroundImage: `url(${props.genresData[i + 3].backgroundPath})`,
                marginRight: 40,
                marginBottom: 37
              }
            }
            onClick={() => handleInputSubmit(props.genresData[i + 3].name)}
          >
            <span className="genre-name">
              {props.genresData[i + 3].name}
            </span>
          </Button>
        </div>
        <div key={props.genresData[i + 4].name}>
          <Button className="single-genre single-genre__font"
            style={
              {
                backgroundImage: `url(${props.genresData[i + 4].backgroundPath})`,
                marginRight: 40,
                marginBottom: 37
              }
            }
            onClick={() => handleInputSubmit(props.genresData[i + 4].name)}
          >
            <span className="genre-name">
              {props.genresData[i + 4].name}
            </span>
          </Button>
        </div>
        <div key={props.genresData[i + 5].name}>
          <Button className="single-genre single-genre__font"
            style={
              {
                backgroundImage: `url(${props.genresData[i + 5].backgroundPath})`,
                marginRight: 40,
                marginBottom: 37
              }
            }
            onClick={() => handleInputSubmit(props.genresData[i + 5].name)}
          >
            <span className="genre-name">
              {props.genresData[i + 5].name}
            </span>
          </Button>
        </div>
      </div>
    )
  }

  props.genresData.map(
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
    <section className="genres-main-container">
      <h4 className="section-heading section-heading__font">Genres</h4>
      <div className="genres-container">
        <Carousel 
          interval={16000}
          navButtonsAlwaysVisible={true}>
            {genreElements}
        </Carousel>
      </div>
    </section>
  );
}

export default Genres;
