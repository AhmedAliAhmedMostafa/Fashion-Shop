import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const Hats = ()=>(
  <div>
    Hats
  </div>
)

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/hats" component={Hats} />
    </Switch>
  );
}

export default App;
