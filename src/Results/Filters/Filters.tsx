import React from 'react';
import './Filters.css';
import FormControl from '@material-ui/core/FormControl';
import { InputLabel, Select, MenuItem, Theme, createStyles } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 10,
      minWidth: 259,
      backgroundColor: 'white',
      fontFamily: 'FiraSans'
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
            Add Filters
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
}

export default Filters;
