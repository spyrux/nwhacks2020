import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './components/landingpage';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Fridge from './components/fridge';
import Recipes from './components/recipes';
import Upload from './components/upload';

function App() {
  return (
  <BrowserRouter>
    <Switch>
    <Route exact path = '/' component = {LandingPage}/>
    <Route path ="/fridge" component = {Fridge}/>
    <Route path ="/recipes" component = {Recipes}/>
    <Route path ="/upload" component = {Upload}/>

    </Switch>
  </BrowserRouter>
  );
}

export default App;
