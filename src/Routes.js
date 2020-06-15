import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from 'react-router-dom';
// Components
import Home from 'pages/Home';
import Chat from 'pages/Chat';

const Routes = () => {
  // TODO: Add context and move history to the store.
  const history = useHistory();

  return (
    <Router>
      <Switch history={history}>
        <Route exact path="/" component={Home} />
        <Route exact path="/chat" component={Chat} />
      </Switch>
    </Router>
  );
};

export default Routes;
