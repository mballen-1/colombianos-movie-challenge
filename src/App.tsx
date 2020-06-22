import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import MovieResult from './Results/MovieResult/MovieResult';
import GlobalCss from './GlobalCss';

function App() {
  return (
    <div className="App">
      <GlobalCss />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/movie/:id' component={MovieResult} />
      </Switch>
    </div>
  );
}

export default App;
