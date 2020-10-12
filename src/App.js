import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Site from './pages/Site/Site';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Site} ></Route>
        <Route/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
