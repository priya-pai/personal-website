import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AdobePic from './adobe.png';
import Research from './researchposter.pdf'
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

export function Adobe(){
    const classes = useStyles();
    return (
        <div className={classes.desc}>
            <h1>Mobile Deep Learning Narratives</h1>
            <p> <b><i> Adobe Research</i></b></p>
            <img src={AdobePic} height="350px" width="350px"></img>
            <figcaption><i>snippet from the control flow</i></figcaption>
            <div>
            <Button variant="contained" color="primary" className={classes.butn1} href={Research} target="_blank">
                VIEW PROJECT HERE
            </Button>
            </div>
            <div className={classes.projBody}>
            <p> <b> Context of Project:</b> I undertook this research project in Summer 2019 as a Deep Learning Research Intern in Adobe Research's Creative 
            Intelligence Lab. I was selected as a <a href="https://adoberesearch.ctlprojects.com/scholarship/previous-scholarship-award-winners/">
            2019 Adobe Women-in-Research Scholar</a> and given the chance to work with
            top researchers at Adobe as an undergraduate. This project was advised by research mentors (and Adobe researchers), <a href="https://research.adobe.com/person/fabian-caba-heilbron/">
            Fabian Caba Heilbron</a> and <a href="https://research.adobe.com/person/joon-young-lee/">Joon-Young Lee.</a> </p>
        <p> <b> Project Synopsis:</b> With the rise of large volumes of video on phones, it has become difficult to parse through
            all of the video and know what moments are most significant or eye-catching to people. We wondered how deep learning models
            could aid this problem and how one could build an intelligent video editor on mobile. 
            We intervened in this problem by first asking - how does a deep learning model even work on mobile? 
            How can we combine a series of models on a mobile app? Because I was only at Adobe for 3 months, I took on a smaller 
            research project to answer these initial exploratory research questions. I created an app that captures video for
            5 seconds, parses through the frames, and selects the highest emotion moments 
            for 6 emotions of interest: anger, disgust, fear, happiness,
            neutrality, sadness, shock. </p>
            <p> <b> My Role:</b>
           <ul>
               <li>
               Researched how deep learning could be used to generate digital video narratives on mobile
               </li>
               <li>
               Developed an iOS app in Objective-C that employs deep learning models and tools (CoreML, OpenCV, MobileNetV2, EmotionNet) 
               to choose high emotion moments given a 5 second live video stream.
               </li>
               <li>
               Presented research findings to Adobe researchers and product teams
               </li>
            </ul> </p>
            <p> <b> Technologies Used:</b> Objective-C, XCode, CoreML, MobileNetV2, <a href="https://github.com/cocoa-ai/FacesVisionDemo">EmotionNet</a> </p>
            </div>
        </div>)}