import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import acluPic from './aclu-pic.png';
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

export function RacialArrests(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Racial Disparity in Marijuana Arrests</h1>
            <p> <b><i> American Civil Liberties Union</i></b></p>
            <img src={acluPic} height="300px" width="600px"></img>
            <figcaption><i>Picture from the report</i></figcaption>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="https://www.aclu.org/report/tale-two-countries-racially-targeted-arrests-era-marijuana-reform" target="_blank">
                VIEW REPORT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> I worked on this project in Fall 2019 during my time at the American Civil Liberties Union 
            as a data science intern. The project was released to the public on April 20th, 2020. </p>
            <p> <b> Project Synopsis:</b> This is a massive research report which outlines marijuana-related arrests (due to possession and sale)
            in the USA from 2010 to 2018. The report provides analysis and visualizations on the racial disparities in these arrests. 
            The report takes a national-level look at trends and analysis but also breaks down statistics by state, which is especially 
            important given legalization and decriminalization in recent years. </p>
            <p> <b> My Role: </b> 
           <ul>
               <li>
                Wrote Python (Pandas) scripts to make calls to the <a href="https://crime-data-explorer.fr.cloud.gov/api"> FBI Crime Data API</a>,
                wrangle and aggregate 2017-2018 marijuana arrest/possession data 
               </li>
               <li>
                Wrote R scripts(tidyverse-dplyr, janitor,) to clean and standardize the 2017-2018 marijuana arrest/possession data
               </li>
               <li>
                Wrote R scripts (ggplot2) to create initial visualizations (not included in the report) of trends in the 2017-2018 data
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> R (tidyverse-dplyr, janitor, ggplot2), Python (pandas), <a href="https://crime-data-explorer.fr.cloud.gov/api"> FBI Crime Data API</a> </p>
            </div>
        </div>
    )
}