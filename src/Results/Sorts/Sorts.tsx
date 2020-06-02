import React, { useState, useEffect } from 'react';
import './Sorts.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { SortsProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: 10,
      minWidth: 259,
      backgroundColor: 'white',
      fontFamily: 'Karla'
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  }),
);

function Sorts(props: SortsProps) {
  const classes = useStyles();
  const [sort, setSort] = React.useState('');
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSort(event.target.value as string);
    
    console.log(sort);
    props.sortsData.onSortInputChange(sort);
  };

  /*function handleInputSubmit(sort: string) {
    props.sortsData.onSortInputChange(sort);
    console.log(sort);
  }*/

  return (
    <div>
        <h6 className="filter-sort">Sort by:</h6>
        <FormControl className={classes.formControl}>
            <Select
                labelId="sorted-select-label"
                id="sorted-select"

                value={sort}
                onChange={handleChange}
            >

            <MenuItem value={''}>No filter</MenuItem>
            <MenuItem value={'title'}>A to Z</MenuItem>
            <MenuItem value={'ascending-rating'}>Ascending Popularity</MenuItem>

            </Select>
        </FormControl>
    </div>
  );
}

export default Sorts;

//onClick={() => handleInputSubmit(sort)}