import React, { useState, useEffect } from 'react';
import './Sorts.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import { SortsProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 230,
      backgroundColor: 'white',
      opacity: 0.57,
      fontFamily: 'Karla',
      borderRadius: 80
    },
  }),
);

function Sorts(props: SortsProps) {
  const classes = useStyles();
  const [sort, setSort] = React.useState('Sort By');
  const [top, setTop] = React.useState('10');
  
  const handleChangeSortBy = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSort(event.target.value as string);
    
    console.log(sort);
    props.sortsData.onSortInputChange(sort, top);
  };

  const handleChangeTops = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTop(event.target.value as string);
    
    console.log(top);
    props.sortsData.onSortInputChange(sort, top);
  };

  return (
    <div className="tops-filter">
      <div>
        <FormControl className={classes.formControl}>
            <Select
                labelId="top-select-label"
                id="top-select"
                value={top}
                onChange={handleChangeTops}
            >
            <MenuItem value={'10'}>Top 10</MenuItem>
            <MenuItem value={'100'}>Top 100</MenuItem>
            </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl}>
            <Select
                labelId="sorted-select-label"
                id="sorted-select"
                value={sort}
                onChange={handleChangeSortBy}
            >
            <MenuItem value={'Sort By'}>Sort By</MenuItem>
            <MenuItem value={'title'}>Title (A-Z)</MenuItem>
            <MenuItem value={'descending-rating'}>Rating Descending</MenuItem>
            </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Sorts;