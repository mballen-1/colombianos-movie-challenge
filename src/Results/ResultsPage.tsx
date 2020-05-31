import React, { useState, useEffect } from 'react';
import './ResultsPage.css';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import ResultsList from './ResultsList/ResultsList';
import { ResultsProps } from './types';
import { PROXY_URL, MOVIES_SORT_BY_API } from '../constants';
import Sorts from './Sorts/Sorts';

function ResultsPage(props: ResultsProps) {
  const [movies, setMovies] = useState([]);
  const [sort, setSort] = React.useState('');
  const [sortInput, setSortInput] = React.useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    if(sort != '')
      fetch(PROXY_URL + MOVIES_SORT_BY_API + `${sort}`)
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setMovies(result);
            setIsSorted(true)
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
  }, [sort])

  const onSortInputChange = (sort : string) => {
    setSortInput(sort);
  }

  const sortProps = {
    onSortInputChange: onSortInputChange
  }

  return (
    <div className="results-container">
        <Filters/>
        <Sorts headerData={sortProps}></Sorts>
        <ResultsList resultsData={isSorted ? movies : props.resultsData}></ResultsList>
        <Pagination variant="outlined" color="secondary" count={10} />
    </div>
  );
}

export default ResultsPage;