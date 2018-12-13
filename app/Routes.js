import React from 'react';
import { Switch, Route } from 'react-router';
import routes from './constants/routes';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import WebMrtcPage from './containers/WebMrtc';

export default () => (
  <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.WEBMRTC} component={WebMrtcPage} />
      <Route path={routes.HOME} component={HomePage} />
    </Switch>
  </App>
);
