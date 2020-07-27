import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
export function Adobe(){
    const classes = useStyles();
    return (
        <div className="desc">
        </div>
    )
}