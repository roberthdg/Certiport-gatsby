import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Course from './CourseDetails';

const div = {
    background:'rgb(239,240,244)',
    marginTop: '5%'
}

export default function Content(props) {
    return (
        <>
        <div className={props.classes.root} id='Calendario' style={div}>
            <Course classes={props.classes}/>
            <br></br><br></br><br></br><br></br>
        </div>
        </>
    );
}