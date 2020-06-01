import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Results from './Results/ResultsPage';
import MovieResult from './Results/ResultsList/MovieResult/MovieResult.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/results' component={Results}/>
        <Route path='/movie/:id' component={MovieResult}/>
      </Switch>
    </div>
  );
}

export default App;
