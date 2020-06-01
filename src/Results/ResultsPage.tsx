import React from 'react';
import './ResultsPage.css';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import ResultsList from './ResultsList/ResultsList';
import { ResultsProps } from './types';

function ResultsPage(props: ResultsProps) {
  return (
    <div className="results-container">
        <Filters/>
        <ResultsList resultsData={props.resultsData}></ResultsList>
        <Pagination variant="outlined" color="secondary" count={10} />
    </div>
  );
}

export default ResultsPage;