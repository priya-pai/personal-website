import React from 'react';
import logo from './logo.svg';
import './App.css';
import {About} from './pages/about/about.js';
import {Experience} from './pages/experience/experience.js';
import {Projects} from './pages/projects/projects.js';
import {  NavLink,Link, BrowserRouter as Router, Route } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
nav:{
  backgroundColor:'white',
  height:'60px',
  borderBottom:'1px solid rgb(0,0,0)',
  paddingBottom:'60px',
  boxShadow: 'none !important'
},
lnk:{
  marginRight:'30px'
}
}));

function App() {
  const classes = useStyles();
  return (
    <section className="App">
      <Router>
      <AppBar position="static" className={classes.nav}>
        <Toolbar id="nav">
        <NavLink tag={Link} className={classes.lnk} exact activeClassName="underline" to="/">about</NavLink>
        <NavLink tag={Link} className={classes.lnk} exact activeClassName="underline" to="/projects">projects</NavLink>
        <NavLink tag={Link} className={classes.lnk} exact activeClassName="underline" to="/experiences">experience</NavLink>
        </Toolbar>
      </AppBar>
        <Route exact path="/" component={About} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/projects" component={Projects} />
      </Router>
    </section>
  );
}

export default App;
