import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import MovieResult from './Results/MovieResult/MovieResult';
import GlobalCss from './GlobalCss';
import ResultsPage from './Results/ResultsPage';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/movie/:id' component={MovieResult} />
          <Route path='/results' component={ResultsPage} />
        </Switch>
      </div>
    </>
  );
}

export default App;
