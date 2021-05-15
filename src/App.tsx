import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { MyTestPage } from './pages/myTestPage';
import { MyTestPage2 } from './pages/myTestPage2';

const App: FC = () => {
  return (
    <Switch>
      <Redirect exact path="/" to="/test1" />
      <Route path="/test1" component={MyTestPage} />
      <Route path="/test2" component={MyTestPage2} />
    </Switch>
  );
};

export default App;
