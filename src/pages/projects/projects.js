import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ccs from './ccs.png';
import mobileportal from './mobileportal.png';
import racial from './racial.png';
import quarto from './quarto.png';
import adobe from './adobe.png';
import cuimpact from './cuimpact.png';
import evictions from './evictions.png';
import './projects.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      desc:{
        display: 'inline-block',
        fontSize:'16px',
        lineHeight: '1.4',
        fontWeight: '500',
        width:'1020px'
    },
    project:{
      border: '2px solid #B2CC98'
    }
}));

const projectsData = [
  {
    title:'UChicago Poverty Lab - Chicago College Success',
    image: ccs,
    link:'/projects/ccs'
  },
  {
    title:'Columbia - Mobile Library Portal',
    image: mobileportal,
    link:'/projects/mobileportal'
  },
  {
    title:'ACLU - Racial Disparity in Marijuana Arrests',
    image: racial,
    link:'/projects/racial-arrests'
  },
  {
    title:'ACLU - Evictions Analysis',
    image: evictions,
    link:'/projects/evictions'
  },
  {
    title:'Adobe Research - Mobile Deep Learning Narratives',
    image: adobe,
    link:'/projects/adobe'
  },
  {
    title:'Quarto Magazine Virtual Launch',
    image: quarto,
    link:'/projects/quarto'
  },
  {
    title:'Columbia - CUImpact',
    image: cuimpact,
    link:'/projects/cuimpact'
  }
]


export function Projects(){

    return (
        <div className="desc">
        <h1 id='projH'> projects </h1>
        <Grid container spacing={4}>
          {
            [...Array(projectsData.length).keys()].map((index) =>
            <Grid container item xs={4} md={4} lg={4} key ={projectsData[index].title}>
              <div width='300px'height='300px' className="projectDiv">
                  <Link to={projectsData[index].link} style={{ textDecoration: 'none' }}>
                  <span className="txt">
                    <h3>{projectsData[index].title}</h3>
                  </span>
                 <img className="project" src={projectsData[index].image} 
                 alt={projectsData[index].title} width='300px'height='300px'/>
                  </Link> 
              </div>
              </Grid>)
          }

        </Grid>
        </div>
    )
}