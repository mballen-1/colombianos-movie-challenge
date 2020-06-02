import React, { useState, useEffect } from 'react';
import './Filters.css';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Select, MenuItem, Theme, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Sorts from './Sorts/Sorts';
import { FiltersProps } from './type';
import Tops from './Tops/Tops';

function Filters(props: FiltersProps) {
  const [movies, setMovies] = useState([]);
  const [sortInput, setSortInput] = React.useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  function handleInputSubmit(moviesArr : never[]) {
    props.filtersData.onFiltersInputChange(moviesArr)
  }

  useEffect(() => {
    fetch(props.apiUrl + '&sort=' + `${sortInput}`)
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
    
  }, [sortInput])

  const onSortInputChange = (sort : string) => {
    handleInputSubmit(movies);
    setSortInput(sort);
  }

  const sortProps = {
    onSortInputChange: onSortInputChange
  }

  const topsProps = {
    onTopsInputChange: onSortInputChange
  }

  return (
    <div className="filters-container">
      <h6 className="filter-h6">Display options:</h6>
      <div className="tops-filter">
        <Tops topsData={topsProps}></Tops>
        <Sorts sortsData={sortProps}></Sorts>
      </div>
    </div>
  )
}

export default Filters;

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

