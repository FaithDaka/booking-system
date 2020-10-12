import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BookingTabs from './components/BookingTabs';

const App = () => {
  return (
    <BrowserRouter>
      <BookingTabs />
      <Switch>
        <Route/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
