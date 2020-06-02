import React, { useState, useEffect } from 'react';
import './ResultsPage.css';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import Sorts from './Sorts/Sorts';
import ResultsList from './ResultsList/ResultsList';
import { ResultsProps } from './types';

function ResultsPage(props: ResultsProps) {
  const [movies, setMovies] = useState([]);
  const [sortInput, setSortInput] = React.useState('');
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  useEffect(() => {
    fetch(props.apiUrl + '&sort=' + `${sortInput}`)
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
    
  }, [sortInput])

  const onSortInputChange = (sort : string) => {
    setSortInput(sort);
  }

  const sortProps = {
    onSortInputChange: onSortInputChange
  }

  return (
    <div className="results-container">
        <Filters/>
        <Sorts sortsData={sortProps}></Sorts>
        <ResultsList resultsData={isSorted ? movies : props.resultsData}
                     apiUrl={props.apiUrl}></ResultsList>
        <Pagination variant="outlined" color="secondary" count={10} />
    </div>
  );
}

export default ResultsPage;