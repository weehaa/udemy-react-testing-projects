import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Game from '../game';
import Login from '../login';

const App = () => {
  return (
    <main>
      <Switch>
      <Route
        path="/game"
        component={Game}
        exact />
      <Route
        path="/login"
        component={Login}
        exact />
      <Route render={() => <h3>Page not found</h3>}/>
      </Switch>
    </main>
  )
}

export default App;
