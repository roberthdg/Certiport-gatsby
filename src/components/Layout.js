import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Header from './Header';
import Content from './Content';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
      },
    card: {
        marginTop: 50,
        maxWidth: 370,
    },
    appBarTop: {
      color: 'white',
      backgroundColor: 'transparent',
      boxShadow: 'none'
    },
    appBarScroll: {
        transition: 'smooth',
        color: 'black',
        backgroundColor: 'white',
        height: '77px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
    },
    media: {
        width: 370,
        height: 340,
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

        <Content classes={classes} trigger={trigger} scrollTo={scrollTo}/>

        <footer style={{width:'100%', height:'40px', paddingTop:'10px', paddingLeft:'10vw', marginTop:'-2vh', background:'rgb(31,84,115)', color:'white'}}>
           © 2020 | Made by <a href='https://roberthdg.site' target='_blank' style={{textDecoration:'none', color: 'white'}}><strong>Roberth Gómez</strong></a>           
        </footer>
        </>
    );
}