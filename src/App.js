import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeroSection from './components/Layout/HeroSection';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HeroSection} ></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
