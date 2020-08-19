import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import mobilePic from './mobile-pic.png';
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

export function MobilePortal(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Mobile Library Portal</h1>
            <p> <b><i> Columbia University</i></b></p>
            <img src={mobilePic} height="300px" width="800px"></img>
            <figcaption><i>Picture of our project overview & process</i></figcaption>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="https://group1-pit.github.io/" target="_blank">
                VIEW PROJECT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> I led this project in June 2020 as a teaching assistant for Columbia's first 
            summer <a href="https://columbia-pit.com/"> Public Interest Technology Lab</a>, which seeked to build technology
            for the public good. Our summer theme was techology to bolster library services. </p>
            <p> <b> Project Synopsis:</b> This project was a collaboration between 3 disciplines: urban planning, computer science, and journnalism.
            We researched existing mobile library services, focusing our attention on Houston's existing Book Mobile. We wanted to analyze how
            mobile library services could collaborate with existing social needs. We narrowed our research to using mobile library services
            to aid unemployment needs in the COVID-19 era. The project was made up of user and expert interviews, research 
            (especially mapping), and mockups of a possible app made in Figma.
            </p>
            <p> <b> My Role: </b> 
           <ul>
               <li>
                Led the project. Determined project scope, divided up tasks, and coordinated timelines amongst group members.
               </li>
               <li>
                Collaborated on Figma mockups and website presentation on Jekyll. 
               </li>
               <li>
                Conducted interviews with Houston Public Library and mobile service experts.
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> HTML/CSS/Jekyll (project website), Figma (app mockups) </p>
            </div>
        </div>
    )
}