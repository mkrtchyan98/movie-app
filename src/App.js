import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Routes } from "./Routes";

import { mainStyle } from "./GlobalStyles/GlobalStyles";

export default function App() {
  const styles = mainStyle();
  return (
    <Router>
        <nav>
          <ul className={styles.root}>
            <li>
              <Link to="/series">Series</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          {Routes.map(route => {
            return (
                <Route
                    key={route.name}
                    path={route.path}
                    component={route.component}
                    exact={route.isExact}
                />
            )
          })}
        </Switch>
    </Router>
  );
}
