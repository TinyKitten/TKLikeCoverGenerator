import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/atoms/Footer';
import HomePage from './components/pages/Home';
import NoMatchPage from './components/pages/NoMatch';

const Routes = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route component={NoMatchPage} />
      </Switch>
      <Footer />
    </React.Fragment>
  </Router>
);

export default Routes;
