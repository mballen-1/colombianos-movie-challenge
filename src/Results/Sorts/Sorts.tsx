import React from 'react';
import './Sorts.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { SortsProps } from './Sorts';

const useStyles = makeStyles((theme: Theme) =>
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

function Sorts(props: SortsProps) {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSort(event.target.value as string);
  };

  function handleInputSubmit(sort: string) {
    props.sortsData.onInputSortChange(sort);
  }

  return (
    <div>
        <h6 className="filter-sort">Sort by:</h6>
        <FormControl className={classes.formControl}>
            <Select
            value={sort}
            onChange={handleChange}
            onClick={() => handleInputSubmit(sort)}
            >

            <MenuItem value=''>None</MenuItem>
            <MenuItem value={'title'}>A to Z</MenuItem>
            <MenuItem value={'ascending-rating'}>Ascending Popularity</MenuItem>

            </Select>
        </FormControl>
    </div>
  );
}

export default Sorts;

//<InputLabel className='inputLabel-sort'>Sort By:</InputLabel>