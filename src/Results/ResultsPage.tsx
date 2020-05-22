import React from 'react';
import './ResultsPage.css';
import Header from '../shared/Header/Header';
import Pagination from '@material-ui/lab/Pagination';
import Filters from './Filters/Filters';
import background from '../assets/images/GAC_Parasite3.jpg';
import ResultsList from './ResultsList/ResultsList';

export const mockedResults = [
    {
      imgPath: background,
      movieTitle: 'Parasite',
      releaseDate: '11/01/2019',
      genre: "Comedy, Thriller, Drama",
      duration: "2h 15 min",
      synopsis: "The Kim family—father Ki-taek, mother Chung-sook, daughter Ki-jung and son Ki-woo—live in a small semi-basement apartment (banjiha)"
    },
    {
      imgPath: background,
      movieTitle: 'Parasite',
      releaseDate: '11/01/2019',
      genre: "Comedy, Thriller, Drama",
      duration: "2h 15 min",
      synopsis: "The Kim family—father Ki-taek, mother Chung-sook, daughter Ki-jung and son Ki-woo—live in a small semi-basement apartment (banjiha)"
    }
]


function ResultsPage() {
  return (
    <div className="results-container">
        <Header></Header>
        <Filters/>
        <ResultsList resultsData={mockedResults}></ResultsList>
        <Pagination variant="outlined" color="secondary" count={10} />
    </div>
  );
}

export default ResultsPage;
