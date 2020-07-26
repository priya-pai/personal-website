import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      desc:{
        display: 'inline-block',
        fontSize:'16px',
        lineHeight: '1.4',
        fontWeight: '500'
    }
}));

export function Projects(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
        <h1> projects </h1>
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
           
        </Grid>
        <Grid container item xs={12} spacing={3}>
        </Grid>
        <Grid container item xs={12} spacing={3}>
            
        </Grid>
        </Grid>
        </div>
    )
}