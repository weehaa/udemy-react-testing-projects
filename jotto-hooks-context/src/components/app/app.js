import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Game from '../game';
import Login from '../login';
import Home from '../home';
import NavbarMenu from '../navbar-menu';

const App = () => {
  const [level, setLevel] = useState('easy');
  const [dictionary, setDictionary] = useState('adult');
  const [wordLength, setWordLength] = useState('5');

  return (
    <main className="container text-center">
      <NavbarMenu/>
      <Switch>
        <Route
          path="/"
          render={() =>
            <Home
              level={level}
              setLevel={setLevel}
              dictionary={dictionary}
              setDictionary={setDictionary}
              wordLength={wordLength}
              setWordLength={setWordLength}/>
          }
          exact/>
        <Route
          path="/game"
          render={() =>
            <Game
              level={level}
              dictionary={dictionary}
              wordLength={wordLength}
            />}
          exact/>
        <Route
          path="/login"
          component={Login}
          exact/>
        <Route render={() => <h3>Page not found</h3>}/>
      </Switch>
    </main>
  );
};

export default App;
