import React from 'react';
import logo from './logo.svg';
import './App.css';
import {About} from './pages/about/about.js';
import {Experience} from './pages/experience/experience.js';
import {Projects} from './pages/projects/projects.js';
import {Adobe} from './pages/projects/adobe.js';
import {Ccs} from './pages/projects/ccs.js';
import {CuImpact} from './pages/projects/cuimpact.js';
import {Evictions} from './pages/projects/evictions.js';
import {MobilePortal} from './pages/projects/mobileportal.js';
import {Quarto} from './pages/projects/quarto.js';
import {RacialArrests} from './pages/projects/arrests.js';
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
},
foot:{
  paddingTop:'30px',
  paddingBottom:'15px'
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
        </Toolbar>
      </AppBar>
        <Route exact path="/" component={About} />
        <Route path="/experience" component={Experience} />
        <Route path="/projects" component={Projects} />
        <Route path="/projects/adobe" component={Adobe} />
        <Route path="/projects/ccs" component={Ccs} />
        <Route path="/projects/cuimpact" component={CuImpact} />
        <Route path="/projects/evictions" component={Evictions} />
        <Route path="/projects/mobileportal" component={MobilePortal} />
        <Route path="/projects/quarto" component={Quarto} />
        <Route path="/projects/racial-arrests" component={RacialArrests} />
      </Router>
      <footer className={classes.foot}>
        <hr width='50%'></hr>
        Website made by Priya Pai 2020. 
      </footer>
    </section>
  );
}

export default App;
