import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'

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

const navStyle={
    position:'absolute', 
    right: '0', 
    margin:' 26px 20% 0 0',
    fontSize: '17px',
    cursor:'pointer'
}

const cursos = [
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
]

export default function ElevateAppBar(props) {

    const classes = useStyles();

    const [active, setActive] = useState(false);

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
        <CssBaseline />

        <div style={{marginTop:'35vh', top: '0', marginLeft:'16vw', color:'white', position: 'absolute'}}>
            <Typography variant='h4'>
                <span style={{fontSize:'70px'}}>Tu camino al <strong>ÉXITO</strong> </span> <br />
                Mejora tus habilidades con cursos y certificaciones online <br /> <br />
            </Typography>           
            <a className='button' onClick={()=> scrollTo(document.getElementById('servicios'))}> Más información</a>
        </div>

        <AppBar className={trigger ? classes.appBarScroll : classes.appBarTop}>
            <Toolbar>
                <img src={trigger ? 'https://fletesya.cl/img/gatsby/logo.png' : 'https://fletesya.cl/img/gatsby/logo_white.png'} draggable={false} style={{marginLeft:'20%', marginTop: '10px',width:'200px'}}/>
            </Toolbar>
            <Typography style={navStyle}> 
                <span onClick={()=> scrollTo(document.getElementById('inicio'))} className={trigger ? 'navItem' : 'navItem top'}> Inicio </span>
                <span onClick={()=> scrollTo(document.getElementById('nosotros'))}  className={trigger ? 'navItem' : 'navItem top'}> Nosotros </span>
                <span onClick={()=> scrollTo(document.getElementById('servicios'))}  className={trigger ? 'navItem' : 'navItem top'}> Servicios </span>
                <span onClick={()=> scrollTo(document.getElementById('contacto'))} className={trigger ? 'navItem' : 'navItem top'}> Contacto </span>
            </Typography>
        </AppBar>

        <div id='nosotros' style={{marginTop:'44vw', width:'100%', textAlign:'center'}}>
            <Box display="flex" width='100%'>
                <Box m="auto" style={{paddingTop:'100px', paddingBottom:'30px', fontWeight: '300', fontSize:'60px', maxWidth:'30%', lineHeight:'70px'}}>  
                <span style={{color: 'rgb(109,109,132)', fontSize:'25px', fontWeight: '500'}}>Cursos Online | Presenciales</span> <br/>
                Un mundo de posibilidades para tu  formación
                </Box>
            </Box>
         
            <Box display="flex" width='100%'>
                <Box m="auto" style={{fontWeight: '300', maxWidth:'40%', fontSize:'25px'}}>
                    En <strong>Certiport</strong> nos especializamos por tener a tu disposición los mejores cursos de capacitación para diferentes áreas de especialización. 
                    Contamos con una plataforma diseñada especialmente para cursos en línea, con profesores preparados y trabajando actualmente en su área y certificación 
                    internacional avalada por <strong>Autodesk®</strong> lo que te permitirá tener la mejor experiencia en estudios a distancia. 
                </Box>
            </Box>
         
            <div className={classes.root} id='servicios'>
                <Grid container>
                    {cursos.map((curso, i) => (
                        <Grid sm={3} md={3} lg={3} key={i}>
                            <div className='cursoDiv' onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(false)}>
                                <div className={active===i? 'cursoFiltro' : null}/>
                                <Typography style={active===i?  {marginTop: '9vw',transition:'0.6s'} : { marginTop:'10vw', transition:'0.6s'}}>
                                    <span className='titulo'>{curso.titulo}</span> <br />
                                    <span className='descripcion'><br />{curso.descripcion}</span>
                                </Typography>
                            </div>
                            <img src={`https://fletesya.cl/img/gatsby/curso${i+1}.jpg`} className={active===i? 'curso activo' : 'curso'}/> 
                        </Grid>
                        )
                    )}
                </Grid>
            </div>

        </div>
        
       <div id='contacto' style={{marginTop:'6vw', width:'100%', height:'400px', textAlign:'center'}}>
           <img src='https://fletesya.cl/img/gatsby/bottom.png' />
           <p>
             
           </p>
       </div>

        </>
    );
}