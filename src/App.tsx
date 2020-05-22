import React from 'react';
import './App.css';
import HomePage from './HomePage/HomePage';
import { Switch, Route } from 'react-router-dom';
import Results from './Results/ResultsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/results' component={Results}/>
      </Switch>
    </div>
  );
}

export default App;
