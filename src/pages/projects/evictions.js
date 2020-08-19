import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import evicPic from './evictions-pic.png';
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
    projBody:{
        textAlign:'left',
        paddingBottom:'30px'
    },
    butn1:{
        marginTop:'20px',
        padding:'10px',
        backgroundColor:'#B2CC98',
        color:'black',
        '&:hover': {
            backgroundColor: '#B2CC98',
          }
    }
}));

export function Evictions(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Disparity in Evictions</h1>
            <p> <b><i> American Civil Liberties Union</i></b></p>
            <img src={evicPic} height="370px" width="570px"></img>
            <figcaption><i>Visualization from article made by ACLU Data Journalist, Sophie Beiers</i></figcaption>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="https://www.aclu.org/news/racial-justice/clearing-the-record-how-eviction-sealing-laws-can-advance-housing-access-for-women-of-color/" target="_blank">
                VIEW REPORT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> I worked on this project in Fall 2019 during my time at the American Civil Liberties Union 
            as a data science intern. The project was released to the public on January 10th, 2020. Everything in this project was in collaboration
            and under the guidance of ACLU Data Journalist, Sophie Beiers, who led the project.  </p>
            <p> <b> Project Synopsis:</b> This project analyzed national eviction data from 2012 to 2016,
            provided by the <a href="https://evictionlab.org/">Eviction Lab</a>. We focused our analysis on a state and local level
            and compared Massachusetts against the rest of the country. Our analysis was to bolster support for the <a href="https://www.passthehomesact.org/">
            HOMES Act</a>, which will be voted on by legislators this spring session. 
            </p>
            <p> <b> My Role: </b> 
           <ul>
               <li>
                Wrote R scripts to analyze trends and comparisons of MA data vs. national data.
               </li>
               <li>
                Wrote R scripts (ggplot2) to visualize given data (used in internal reporting but not in the article).
               </li>
               <li>
                Put together main analyses and conclusions into an RMarkdown which was reported to my superior managers/lawyers. 
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> R (tidyverse-dplyr, janitor, ggplot2), RMarkdown </p>
            </div>
        </div>
    )
}