import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Site from './pages/Site/Site';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Site} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
