import React from 'react';
import './Filters.css';
import Sorts from './Sorts/Sorts';
import { FiltersProps } from './type';

function Filters(props: FiltersProps) {

  function handleInputSortSubmit(sort : string) {
    props.filtersData.onSortInputChange(sort);
  }

  const onSortInputChange = (sort : string) => {
    handleInputSortSubmit(sort);
  }

  function handleInputTopsSubmit(tops : string) {
    props.filtersData.onTopsInputChange(tops);
  }

  const onTopsInputChange = (tops : string) => {
    handleInputTopsSubmit(tops);
  }

  const sortProps = {
    onSortInputChange: onSortInputChange,
    onTopsInputChange: onTopsInputChange
  }

  return (
    <div className="filters-container">
      <div>
      <h6 className="filter-h6">Display options:</h6>
      </div>
      <Sorts sortsData={sortProps}></Sorts>
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

