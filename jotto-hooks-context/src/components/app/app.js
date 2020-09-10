import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Game from '../game';

const App = () => {
  return (
    <main>
      <Switch>
      <Route
        path="/game"
        component={Game}
        exact />
      <Route render={() => <h3>Page not found</h3>}/>
      </Switch>
    </main>
  )
}

export default App;
