import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Pic from './quarto-pic.png';
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

export function Quarto(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Quarto Magazine Virtual Launch</h1>
            <p> <b><i> Columbia University</i></b></p>
            <img src={Pic} height="450px" width="700px"></img>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="http://quartomagazine.com/print2020-view" target="_blank">
                VIEW PROJECT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> I undertook this project in April 2020 as the Web Editor of <a href="http://quartomagazine.com/">
            Quarto Magazine</a>, Columbia's Offical Literary Magazine. </p>
            <p> <b> Project Synopsis:</b>  With COVID-19, our magazine had to re-imagine our annual magazine launch. I decided to code a "virtual 
            experience" which was shared during our virtual Zoom launch. This experience makes our launch, with clips of writers reading their work,
            accessible to those who couldn't attend our launch due to timezone, technical issues, etc. and puts a creative, technological spin on the
            traditional magazine launch.  </p>
            <p> <b> My Role:</b>
           <ul>
               <li>
                Creatively design and format the Squarespace page using HTML and CSS.
               </li>
               <li>
                Upload and integrate Youtube videos of readers writing their work.
               </li>
               <li>
                Coordinate narrative direction and flow of the page.
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> HTML and CSS to customize a Squarespace page (backgrounds,spacing,text colors and styles had to be coded) </p>
            </div>
        </div>)}