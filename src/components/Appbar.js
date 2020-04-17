import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const navStyle={
    position:'absolute', 
    right: '0', 
    margin:' 26px 20% 0 0',
    fontSize: '17px',
    cursor:'pointer'
}

function Appbar(props) {
    return (
        <>    
        <AppBar className={props.trigger ? props.classes.appBarScroll : props.classes.appBarTop}>
            <Toolbar>
                <img src={props.trigger ? '/logo.png' : '/logo_white.png'} className={props.trigger ? 'topLogo' : 'logo'} draggable={false} />
            </Toolbar>
            <Typography style={navStyle}> 
                <span onClick={()=> props.scrollTo(document.getElementById('inicio'))} className={props.trigger ? 'navItem' : 'navItem top'}> Inicio </span>
                <span onClick={()=> props.scrollTo(document.getElementById('nosotros'))}  className={props.trigger ? 'navItem' : 'navItem top'}> Nosotros </span>
                <span onClick={()=> props.scrollTo(document.getElementById('cursos'))}  className={props.trigger ? 'navItem' : 'navItem top'}> Cursos </span>
                <span onClick={()=> props.scrollTo(document.getElementById('contacto'))} className={props.trigger ? 'navItem' : 'navItem top'}> Contáctanos </span>
            </Typography>
        </AppBar>
        </>
    );
}

export default Appbar;