import React, { useState, useEffect } from 'react';
import './Filters.css';
import Sorts from './Sorts/Sorts';
import { FiltersProps } from './type';
import Tops from './Tops/Tops';
import { SingleMovieProp } from '../../shared/SingleMovie/types';
import Road from '../../shared/Road/Road';

function Filters(props: FiltersProps) {
  const [movies, setMovies] = useState([]);
  const [sortInput, setSortInput] = React.useState('');
  const [topInput, setTopInput] = React.useState('10');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleInputSubmit(moviesArr : Array<SingleMovieProp>) {
    props.filtersData.onFiltersInputChange(moviesArr)
  }

  useEffect(() => {
    fetch(props.apiUrl + '&sort=' + `${sortInput}` + '&limit=' + `${topInput}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setMovies(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
  }, [sortInput, topInput])

  const onSortInputChange = (sort : string, tops : string) => {
    handleInputSubmit(movies);
    setTopInput(tops);
    setSortInput(sort);
  }

  const sortProps = {
    onSortInputChange: onSortInputChange
  }

  return (
    <div className="filters-container">
      <h6 className="filter-h6">Display options:</h6>
      {isLoaded ? 
        <div>
          <Sorts sortsData={sortProps}></Sorts>
        </div>
        : <Road/>
      }
    </div>
  )
}

export default Filters;


//<Tops topsData={topsProps}></Tops> 

/*const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 10,
      minWidth: 259,
      backgroundColor: 'white',
      fontFamily: 'Rubik'
    },
    selectEmpty: {
      marginTop: 20,
    },
  }),
);

function Filters() {
    
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };
  
  return (
    <div className="filters-container">
        <h6 className="filter-h6">
            Add Filters: 
        </h6>
        <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleChange}
            >
                <MenuItem value={'Drama'}>Drama</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl} disabled>
            <InputLabel id="demo-simple-select-label">Budget</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                onChange={handleChange}
            >
                <MenuItem value={'Drama'}>Drama</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl} disabled>
            <InputLabel id="demo-simple-select-label">Certification</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                onChange={handleChange}
            >
                <MenuItem value={'Drama'}>Drama</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}  disabled>
            <InputLabel id="demo-simple-select-label">Language</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                // value={age}
                onChange={handleChange}
            >
                <MenuItem value={'Drama'}>Drama</MenuItem>
                <MenuItem value={'Comedy'}>Comedy</MenuItem>
                <MenuItem value={'Action'}>Action</MenuItem>
            </Select>
        </FormControl>
    </div>
  );
}*/

