import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Header from './Header';
import About from './About';
import CoursesInfo from './CoursesInfo';
import NextCourses from './NextCourses';
import Contact from './Contact';
import Info from './Info';
import FixedButton from  './FixedButton';


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    appBarTop: {
      color: 'white',
      backgroundColor: 'transparent',
      boxShadow: 'none',
    },
    appBarScroll: {
        transition: 'smooth',
        color: 'black',
        backgroundColor: 'white',
        height: '77px',
        [theme.breakpoints.down('sm')]: {
            height: '60px',
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
    },
    card: {
        marginTop: 50,
        maxWidth: 370,
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
            marginLeft: '10vw'
        }
    },
    media: {
        width: 370,
        height: 340,
        [theme.breakpoints.down('sm')]: {
            width: '80vw',
            height: '75vw'
        },
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));

export default function Layout(props) {

    const classes = useStyles();

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 29
    });

    const scrollTo = ele => {
        ele.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    };

    return (
        <>    
        <Helmet>
            <meta charSet="utf-8" />
            <title>Yachana | Cursos Online y Presenciales</title>
        </Helmet>

        {/* material-UI styles */}
        <CssBaseline />

        <Header classes={classes} trigger={trigger} scrollTo={scrollTo}/>

        { trigger? <FixedButton scrollTo={scrollTo} type='scrollTo'/> : null }

        <FixedButton />

        <main style={{textAlign:'center'}}>    
            <About />
            <CoursesInfo classes={classes}/>
            <NextCourses classes={classes}/>
            <Contact classes={classes}/>
            <Info />
        </main>

        <footer style={{width:'100vw', height:'40px', paddingTop:'10px', paddingLeft:'10vw', marginTop:'-2vh', background:'rgb(31,84,115)', color:'white'}}>
          © 2020 | Made by <a href='https://roberthdg.site' target='_blank' style={{textDecoration:'none', color: 'white'}}><strong>Roberth Gómez</strong></a>           
        </footer>
        </>
    );
}