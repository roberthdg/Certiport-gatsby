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

export default function ElevateAppBar(props) {

    const classes = useStyles();

    const [active, setActive] = useState(0);

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
        <AppBar className={trigger ? classes.appBarScroll : classes.appBarTop}>
            <Toolbar>
                <Typography variant="h4" style={{marginLeft:'20%', fontWeight: '800', marginTop: '10px'}}>CERTIPORT</Typography>
            </Toolbar>
            <Typography style={navStyle}> 
                <span onClick={()=> scrollTo(document.getElementById('Inicio'))} className='navItem'> Inicio </span>
                <span onClick={()=> scrollTo(document.getElementById('Nosotros'))}  className='navItem'> Nosotros </span>
                <span onClick={()=> scrollTo(document.getElementById('Servicios'))}  className='navItem'> Servicios </span>
                <span className='navItem'> Contacto </span>
            </Typography>
        </AppBar>

        <div id='Nosotros' style={{marginTop:'46vw', height:'500px', width:'100%', textAlign:'center'}}>

            <Box display="flex" width='100%'>
                <Box m="auto" style={{paddingTop:'100px', paddingBottom:'30px', fontWeight: '300', fontSize:'60px', maxWidth:'30%', lineHeight:'70px'}}>  
                <span style={{color: 'rgb(109,109,132)', fontSize:'25px', fontWeight: '500'}}>Cursos Online | Presenciales</span> <br/>
                Un mundo de posibilidades para tu  formación
                </Box>
            </Box>
         
            <Box display="flex" width='100%'>
                <Box m="auto" style={{fontWeight: '300', paddingBottom:'100px', maxWidth:'40%', fontSize:'25px'}}>
                    En <strong>Certiport</strong> nos especializamos por tener a tu disposición los mejores cursos de capacitación para diferentes áreas de especialización. 
                    Contamos con una plataforma diseñada especialmente para cursos en línea, con profesores preparados y trabajando actualmente en su área y certificación 
                    internacional avalada por <strong>Autodesk®</strong> lo que te permitirá tener la mejor experiencia en estudios a distancia. 
                </Box>
            </Box>
         
            <div className={classes.root} id='Servicios'>
                <Grid container >
                    {[1,2,3,4,5,6,7,8].map(i => (
                        <Grid sm={3} md={3} lg={3} key={i} justify='center' alignContent='center' alignItems='center'>
                            <div className='cursoDiv' onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(0)}/>
                            <img src={`/static/curso${i}.jpg`} className={active===i? 'curso activo' : 'curso'}/> 
                        </Grid>
                        )
                    )}
                </Grid>
                
            </div>
        </div>
        
        <div style={{marginTop:'40vh', top: '0', marginLeft:'20vw', color:'white', position: 'absolute'}}>
            <Typography variant='h6'>
                Tu camino al EXITO <br />
                Mejora tus habilidades con cursos y certificaciones online
            </Typography>           
            <a className='button'> Más información</a>
        </div>


        </>
    );
}