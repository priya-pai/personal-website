import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import cuimpactPic from './cuimpact-shot.png';
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
        backgroundColor:'#B2CC98',
        color:'black',
        '&:hover': {
            backgroundColor: '#B2CC98',
          }
    }
}));

export function CuImpact(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>CUImpact</h1>
            <p> <b><i> Columbia University</i></b></p>
            <img src={cuimpactPic} height="400px" width="700px"></img>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="http://cuimpact.pythonanywhere.com/" target="_blank">
                VIEW PROJECT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> Made in Fall 2019 <a href="http://www.columbia.edu/~lc3251/courses/fall19/">
                Advanced Web Design Studio</a>, a senior computer science course at Columbia. 
                This served as my course project I developed over the semester. Advised by Professor Lydia Chilton. </p>
            <p> <b> Project Synopsis:</b> CUImpact is a website portal for student activists at Columbia to find and post events related
            to issues they are passionate about. You are able to filter campus events based on social justice issues you are most interested in, 
            like 'Environmental Justice' or 'LGBTQ+ Rights' for example. </p>
            <p> <b> My Role: </b> 
           <ul>
               <li>
                   Conducted user interviews, competitior analysis, and user research to understand needs of student activists on campus.
               </li>
               <li>
                   Prototyped and designed the website using HTML, CSS, JavaScript.
               </li>
               <li>
                   Developed and deployed the website using Flask and PythonAnywhere.
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> HTML, CSS, JavaScript (JQuery), Flask (to store objects and route), PythonAnywhere (to host) </p>
            </div>
        </div>
    )
}