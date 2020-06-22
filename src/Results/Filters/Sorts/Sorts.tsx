import React from 'react';
import './Sorts.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select } from '@material-ui/core';
import { SortsProps } from './types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 260,
      backgroundColor: 'white',
      opacity: 0.57,
      fontFamily: 'Karla',
      borderRadius: 80
    },
  }),
);

function Sorts(props: SortsProps) {
  const classes = useStyles();
  const [sort, setSort] = React.useState('sort-by');
  const [top, setTop] = React.useState('0');
  
  const handleChangeSortBy = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();
    setSort(event.target.value as string);
    props.sortsData.onSortInputChange(event.target.value as string);
  };

  const handleChangeTops = (event: React.ChangeEvent<{ value: unknown }>) => {
    event.preventDefault();
    setTop(event.target.value as string);
    props.sortsData.onTopsInputChange(event.target.value as string);
  };

  return (
    <div className="tops-filter">
      <div>
        <FormControl className={classes.formControl}>
            <Select
                labelId="top-select-label"
                id="top-select"
                defaultValue={'0'}
                value={top}
                onChange={handleChangeTops}
            >

            <MenuItem value={'0'}>Top Movies</MenuItem>
            <MenuItem value={'10'}>Top 10</MenuItem>
            <MenuItem value={'100'}>Top 100</MenuItem>
            <MenuItem value={'1000'}>Top 1000</MenuItem>
            </Select>
        </FormControl>
      </div>
      <div>
        <FormControl className={classes.formControl}>
            <Select
                labelId="sorted-select-label"
                id="sorted-select"
                defaultValue={'sort-by'}
                value={sort}
                onChange={handleChangeSortBy}
            >
              
            <MenuItem value={'sort-by'}>Sort By</MenuItem>
            <MenuItem value={'title'}>Title (A-Z)</MenuItem>
            <MenuItem value={'most-recent'}>Most Recent To Less Recent</MenuItem>
            </Select>
        </FormControl>
      </div>
    </div>
  );
}

export default Sorts;

//<MenuItem value={'descending-rating'}>Rating Descending</MenuItem>