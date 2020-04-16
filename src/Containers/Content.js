import React from 'react';
import About from '../components/About';
import Courses from '../components/Courses';
import Calendar from '../components/Calendar';
import Contact from '../components/Contact';

export default function Content(props) {
    return (
        <main style={{textAlign:'center'}}>    
            <About />
            <Courses classes={props.classes}/>
            <Calendar classes={props.classes}/>
            <Contact />
        </main>
    );
}