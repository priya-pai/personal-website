import React from 'react';
import {Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
}));

function FormRow() {
    const classes = useStyles();
    return (
      <React.Fragment>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>item</Paper>
        </Grid>
      </React.Fragment>
    );
  }

export function Projects(){
    const classes = useStyles();
    return (
        <div>
        <h1> projects </h1>
        <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
            <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <FormRow />
        </Grid>
        <Grid container item xs={12} spacing={3}>
            <FormRow />
        </Grid>
        </Grid>
        </div>
    )
}