import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Loader from './components/loader/loader';
import Loadable from 'react-loadable';


const Breedlist = Loadable({
  loader: () => import('./layouts/breedlist/breed.list'),
  loading: Loader,
});

const Breedview = Loadable({
  loader: () => import('./layouts/breedview/breed.view'),
  loading: Loader,
});

class AppSwitch extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/breeds" component={Breedlist} />
          <Route path="/breeds/:id" component={Breedview} />
          <Redirect to="/breeds" />
        </Switch>
      </Router>
    );
  }
}

export default AppSwitch;