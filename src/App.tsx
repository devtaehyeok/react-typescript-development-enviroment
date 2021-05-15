import loadable from '@loadable/component';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';
const MyTestPage = loadable(() => import('@pages/myTestPage'));
const MyTestPage2 = loadable(() => import('@pages/myTestPage2'));
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
