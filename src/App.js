import React from 'react';
import './App.css';
import {About} from './pages/about/about.js';
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
        <Route exact path="/" component={About}/>
      </Router>
    </section>
  );
}

export default App;
