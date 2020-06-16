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


