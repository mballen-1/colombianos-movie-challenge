import React, { useState, useEffect } from 'react';
import './Tops.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import { MenuItem, FormControl, Select, InputLabel } from '@material-ui/core';
import { TopsProps } from './types';

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

function Tops(props: TopsProps) {
  const classes = useStyles();
  const [top, setTop] = React.useState('');
  
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setTop(event.target.value as string);
    
    console.log(top);
    props.topsData.onTopsInputChange(top);
  };

  return (
    <div>
        <FormControl className={classes.formControl}>
          <InputLabel>Top</InputLabel>
            <Select
                labelId="top-select-label"
                id="top-select"
                value={top}
                onChange={handleChange}
            >

            <MenuItem value={''}>No filter</MenuItem>
            <MenuItem value={'top10'}>Top 10</MenuItem>
            <MenuItem value={'top100'}>Top 100</MenuItem>

            </Select>
        </FormControl>
    </div>
  );
}

export default Tops;

//onClick={() => handleInputSubmit(sort)}