import React from 'react';
import About from './About';
import CoursesInfo from './CoursesInfo';
import NextCourses from './NextCourses';
import Contact from './Contact';
import Info from './Info';

export default function Content(props) {
    return (
        <main style={{textAlign:'center'}}>    
            <About />
            <CoursesInfo classes={props.classes}/>
            <NextCourses classes={props.classes}/>
            <Contact />
            <Info />
        </main>
    );
}