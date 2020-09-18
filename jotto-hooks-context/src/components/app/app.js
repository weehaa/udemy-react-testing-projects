import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import Game from '../game';
import Login from '../login';
import Home from '../home';

const App = () => {
  const [level, setLevel] = useState('easy');
  return (
    <main>
        <Switch>
          <Route
            path="/"
            render={() => <Home level={level} setLevel={setLevel} />}
            exact />
          <Route
            path="/game"
            render={() => <Game level={level} />}
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
