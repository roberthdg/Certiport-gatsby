import React from 'react';
import { Helmet } from "react-helmet";
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Appbar from './Appbar';
import Content from './Content'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
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
            <title>Cursos Online | Presenciales</title>
        </Helmet>
        <CssBaseline />
        <img src='https://fletesya.cl/img/gatsby/background.jpeg' id='inicio' className='background' draggable={false} />
        <Appbar classes={classes} trigger={trigger} scrollTo={scrollTo}/>
        <Content classes={classes} trigger={trigger} scrollTo={scrollTo}/>
        </>
    );
}