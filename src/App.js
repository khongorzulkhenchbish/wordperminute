import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Scoreboard from './pages/Scoreboard';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/scoreboard" exact component={Scoreboard}/>
    </Switch>
  );
}

export default App;
