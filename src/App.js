import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Home from './pages/Home';
import Series from './pages/Series';
import Movies from './pages/Movies';
import { makeStyles } from '@material-ui/core/styles';

 const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexWrap:'wrap',
    listStyleType: 'none',
    margin:0,
    padding:0,

    '& > li': {
      flex:1,
      flexBasis:'25%',
      border: 'solid 2px',
      borderRadius:'10px',
      background:'#3c1e1e',
    },
    "& a": {
      textDecoration:'none',
      display: "block",
      color: "white",
      textAlign: "center",
      padding: '1.125em',
      "&:hover": {
      backgroundColor: '#111111', 
    },
     "&:active": {

      backgroundColor: '#111111', 
    }
  }
}
}))

export default function App() {
    const styles = useStyles();
  return (
    <Router>
      <div>
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
          <Route path="/series">
            <Series  />
          </Route>
          <Route path="/movies">
            <Movies />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


