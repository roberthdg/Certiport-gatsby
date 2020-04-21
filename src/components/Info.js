import React from 'react';
import Grid from '@material-ui/core/Grid';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    multilineColor:{
      color:'white'
    },
    notchedOutline: {
      borderWidth: "1px",
      borderColor: "rgb(159,167,191) !important"
    },
    floatingLabelFocusStyle: {
      color: 'white !important'
    }
})

export default function Content(props) {
    const classes = useStyles();
    return (            
        <div id='contacto'>
            <img src='/bottom.png' draggable={false} style={{width:'100vw'}}/>
            <Grid container style={{marginTop:'120px', paddingBottom:'60px'}}>
                <Grid item lg={3} sm={10} style={{margin:'auto', paddingBottom:'80px'}} >
                    <img src='/logo_blue.png' className='infoLogo'/> <br/>
                    <p className='infoTexto'>
                        Encaminados en el esfuerzo hacia la optimización de la enseñanza de herramientas 
                        de computación para estudiantes y profesionales, haciendo más rentables sus servicios en 
                        las áreas de <strong>Ingeniería, Arquitectura, Diseño y Ofimática</strong>.
                    </p> <br/>
                    <img src='/autodesk1.png' style={{width: '120px'}}/>  
                    <img src='/autodesk2.png' style={{width: '120px', marginLeft:'30px'}}/> <br/>
                </Grid>
                <Grid item lg={2} style={{margin:'auto', paddingBottom:'60px', maxWidth:'80%'}} >
                    <RoomOutlinedIcon style={{fontSize: '35px', margin: 'auto'}}/>  <br/>                 
                    <span className='ubicacionTexto'> Edificio Parque Central, Shyris, Av. Eloy Alfaro N23-43. Quito 170135, Ecuador. </span> <br/><br/><br/>
    
                    <LocalPhoneOutlinedIcon style={{fontSize: '35px', margin: 'auto'}} />    <br/>  
                    <span className='ubicacionTexto'> +593983201675  </span> <br/><br/><br/>
                    
                    <MailOutlineOutlinedIcon style={{fontSize: '35px'}}/> <br/>  
                    <span className='ubicacionTexto'> sales@centrodecapacitacion.com </span> <br/><br/>
                </Grid>
                <Grid item lg={3} sm={11} style={{margin:'0 auto', maxWidth:'85%'}} id='contactanos'>
                    <p style={{fontSize:'22px', fontFamily:'fellix'}}>
                        ¿Quieres recibir notificaciones sobre nuevos cursos y programas de certificación?<br/><strong>Suscríbete</strong><br/><br/>                 
                        <TextField
                            label="Correo electrónico"
                            variant="filled"
                            InputLabelProps={{
                                className: classes.floatingLabelFocusStyle,
                                }}
                            InputProps={{
                                classes: {
                                    notchedOutline: classes.notchedOutline
                                },
                                className: classes.multilineColor
                            }}
                        /> <br /> <br />
                        <a style={{padding:'15px', margin:'10px', backgroundColor:'white', fontSize:'15px', color:'black', borderRadius:'3px', cursor:'pointer'}}>ENVIAR</a> 
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}