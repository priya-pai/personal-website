import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import finderPic from './finderpic.png';
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

export function Finder(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Bookstore Finder</h1>
            <p> <b><i> Libro.fm Audiobooks</i></b></p>
            <img src={finderPic} height="400px" width="700px"></img>
            <figcaption><i>Picture of the finder</i></figcaption>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href="https://bookstorelink.com/finder" target="_blank">
                VIEW PROJECT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> I completed this project at Libro.fm in December 2020 in an effort to create a map of our partner bookstores, with 
            inclusive identity filters and a location-based finder. Design of the map was led by Libro.fm's creative director, Nick Johnson.</p>
            <p> <b> Project Synopsis:</b> This bookstore finder maps all of Libro.fm's partner bookstores across the world. It's complete with identity-based filters, such as 
            'Black-Owned', 'Indigenous-Owned', 'Latinx-Owned', and so forth. You can also search for bookstores based on distance to a certain location or address. The map is housed
            on Libro.fm's Bookstore Link website.</p>
            <p> <b> My Role:</b> I engineered the functionality of the map.
           <ul>
               <li>
                Designed and rendered map behavior using <a href="https://docs.mapbox.com/mapbox-gl-js/api/">Mapbox's GL JS API</a>.
               </li>
               <li>
                Geocoded the user's selected location to search for bookstores in a specific surrounding radius with <a href="https://docs.mapbox.com/api/search/">Mapbox's Search API</a>.
               </li>
               <li>
                Embedded map in site using a combination of Ruby on Rails, Javascript, and CSS.
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> Mapbox API, Javascript, Ruby on Rails </p>
            </div>
        </div>)}