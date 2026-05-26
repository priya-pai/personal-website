import React from 'react';
import {Box, Container, makeStyles} from '@material-ui/core'
import Priya from './priya.jpg'
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import './about.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
my_img:{
    marginTop:'50px',
    height:'380px',
    width:'350px',
    borderRadius:'8px 8px 8px 8px'
},
titl:{
    fontSize:'24px'
},
desc:{
    display: "inline-block",
    maxWidth: '620px',
    fontSize:'17px',
    lineHeight: '1.4',
    fontWeight: '500'
}
}));

export function About(){
    const classes = useStyles();
    return (
        <div>
            <div>
            <img src = {Priya} className={classes.my_img} alt="profile-picture"></img>
            <h1 className={classes.titl}>Priya Pai</h1>
            </div>
        <div className={classes.desc}>
            <p> 
                Priya Pai is a fiction writer from Texas. She lives in Ann Arbor, where she is a first-year MFA student in the University of Michigan Helen Zell Writers' Program.
                She is a reader on the Michigan Quarterly Review. Her work has received support from the Tin House Writers' Workshop. She graduated from Columbia University in 2020.
            </p>
            <p>
            Get in touch <a href="mailto:priya.jpai@gmail.com" target="_blank">here!</a>
            </p>
        </div>
        </div>
    )
}
