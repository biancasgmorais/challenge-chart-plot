import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/pages/Home';
import GlobalStyle from '../src/styles/global';

function App() {
  return (
    <BrowserRouter>
        <GlobalStyle/>
      <Switch>
          <Route path="/" exact component={Home}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
