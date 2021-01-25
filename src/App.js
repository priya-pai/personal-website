import React from 'react';
import './App.css';
import {About} from './pages/about/about.js';
import {Experience} from './pages/experience/experience.js';
import {Projects} from './pages/projects/projects.js';
import {Adobe} from './pages/projects/adobe.js';
import {Ccs} from './pages/projects/ccs.js';
import {CuImpact} from './pages/projects/cuimpact.js';
import {Evictions} from './pages/projects/evictions.js';
import {Finder} from './pages/projects/finder.js';
import {MobilePortal} from './pages/projects/mobileportal.js';
import {Quarto} from './pages/projects/quarto.js';
import {RacialArrests} from './pages/projects/arrests.js';
import {  Switch, NavLink,Link, BrowserRouter as Router, Route } from "react-router-dom";
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
        <Route exact path="/" component={About}/>
        <Route exact path="/experience" component={Experience}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/projects/adobe" component={Adobe}/>
        <Route exact path="/projects/ccs" component={Ccs} />
        <Route exact path="/projects/cuimpact" component={CuImpact} />
        <Route exact path="/projects/evictions" component={Evictions} />
        <Route exact path="/projects/finder" component={Finder} />
        <Route exact path="/projects/mobileportal" component={MobilePortal} />
        <Route exact path="/projects/quarto" component={Quarto} />
        <Route exact path="/projects/racial-arrests" component={RacialArrests} />
      </Router>
      <footer className={classes.foot}>
        <hr width='50%'></hr>
        Website made by Priya Pai 2020. 
      </footer>
    </section>
  );
}

export default App;
