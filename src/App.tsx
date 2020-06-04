import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import MovieResult from './Results/ResultsList/MovieResult/MovieResult';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/movie/:id' component={MovieResult}/>
      </Switch>
    </div>
  );
}

export default App;
