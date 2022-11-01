import React from 'react';
import {Box, Container, makeStyles} from '@material-ui/core'
import Priya from './priya.jpg'
import Resume from './PPai_Resume.pdf';
import Button from '@material-ui/core/Button';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import EmailIcon from '@material-ui/icons/Email';
import './about.css';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
my_img:{
    marginTop:'50px',
    height:'250px',
    width:'240px',
    borderRadius:'150px 150px 150px 150px'
},
titl:{
    fontSize:'24px'
},
desc:{
    display: "inline-block",
    maxWidth: '650px',
    fontSize:'16px',
    lineHeight: '1.4',
    fontWeight: '500'
},
butn1:{
    backgroundColor:'#B2CC98',
    color:'black',
    padding:'7px',
    marginRight:'30px',
    '&:hover': {
        backgroundColor: '#B2CC98',
      }
},
butn2:{
    backgroundColor:'#B2CC98',
    color:'black',
    padding:'7px',
    marginLeft:'30px',
    '&:hover': {
        backgroundColor: '#B2CC98',
      }
}
}));
export function About(){
    const classes = useStyles();
    return (
        <div>
            <div>
            <img src = {Priya} className={classes.my_img} alt="profile-picture"></img>
            <h1 className={classes.titl}> priya pai</h1>
            <Link to="/projects" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary" className={classes.butn1}>
                P R O J E C T S
            </Button>
            </Link>
            <Button variant="contained" color="primary" className={classes.butn2} href={Resume} target="_blank">
                E X P E R I E N C E
            </Button>
            </div>
        <div className={classes.desc}>
            <p> I am an interdisciplinary engineer and creative, passionate about intersecting the arts and technology.
                I currently work in software and design at <a href="https://libro.fm">Libro.fm Audiobooks</a>
            </p>
            <p> 
                I graduated from Columbia University in May 2020 with a double major in Computer Science and English Literature. 
                I've interned at <a href="https://research.adobe.com/news/coding-between-the-lines-an-internship-in-deep-learning/">Adobe Research</a>, 
                the <a href="https://medium.com/aclu-tech-analytics/manifesting-tech-for-social-good-my-aclu-internship-experience-be32c431a5c3">
                American Civil Liberties Union</a>, <a href="https://urbanlabs.uchicago.edu/labs/inclusiveeconomy">University of Chicago Inclusive Economy Lab</a>, and worked on interdisciplinary research and design projects all throughout college.
                I was named a <a href="https://research.adobe.com/scholarship/previous-scholarship-award-winners/"> 
                2019 Adobe Women-in-Tech Scholar</a>. I also helped found Columbia's first <a href="https://columbia-pit.com/">
                Public Interest Technology Lab.</a>
            </p>
            <p>
                In my free time, I enjoy writing fiction, painting, and learning about coffee. 
            </p>
            <p>
            Always open to new connections and projects! Find my resume <a href={Resume} target="_blank">here.</a>
            </p>
        </div>
        <div className='icons'>
        <a href="https://github.com/priya-pai" target="_blank"><GitHubIcon fontSize="large" /></a>
        <a href="https://www.linkedin.com/in/priya-pai-public/" target="_blank"><LinkedInIcon fontSize="large" /></a>
        <a href="mailto:pbp2110@columbia.edu" target="_blank"><EmailIcon fontSize="large" /></a>
        </div>
        </div>
    )
}
