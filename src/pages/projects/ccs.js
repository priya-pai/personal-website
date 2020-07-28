import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ccsPic from './ccs-shot.png';
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

export function Ccs(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Chicago College Success Project</h1>
            <p> <b><i> University of Chicago Poverty Lab</i></b></p>
            <img src={ccsPic} height="200px" width="600px"></img>
            <figcaption><i>Picture taken from Poverty Lab Website</i></figcaption>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="https://urbanlabs.uchicago.edu/projects/chicago-college-success" target="_blank">
                VIEW PROJECT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> This is the current project I'm working on as a data research assistant at the <a href="https://urbanlabs.uchicago.edu/labs/poverty">
            UChicago Poverty Lab.</a> I entered the project after the landscape scan and am working in the program evaluation stage. </p>
            <p> <b> Project Synopsis:</b> First-generation college students and students from minority populations face numerous barriers to get into 
            and succeed in college. The Chicago College Success project seeks to analyze various college access and college success 
            programs that serve high school students in Chicago Public Schools, focusing our attention on first-generation and underrepresented
            college students. First, the Poverty Lab conducted a landscape scan of 34 college access and success providers. Now, we are conducting program evaluations of 5 partner organizations with different
            program models. Eventually, we will also do a meta-analysis to understand "patterns in which types of supports are most effective for 
            different groups of students."</p>
            <p> <b> My Role:</b> I am working on a qualitative report and quasi-experimental study of one of the partner organizatons, <a href="https://www.enlacechicago.org/"> Enlace</a>.
           <ul>
               <li>
                Write R (dplyr) scripts to wrangle large public datasets (Chicago Public School data), clean partner CSVs, and format into dataframes.
               </li>
               <li>
                Write R - flextables, ggplot - scripts to create data visualizations that will summarize qualitative characteristics.
               </li>
               <li>
                Write an RMarkdown to create a cumulative qualitative report.
               </li>
               <li>
                Write R scripts to run regressions and statistical tests to model and analyze data (t-tests, z-tests, log regs, linear regs). 
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> R (ggplot2, tidyverse-dplyr, flextable, stargazer), RMarkdown </p>
            </div>
        </div>)}