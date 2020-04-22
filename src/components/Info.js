import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const [email, setEmail] = useState('');
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [displayLoader, setDisplayLoader] = useState(false);
    const [disableField, setDisableField] = useState(false);
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   
    function subscribe() {
        setDisplayAlert(false);
        
        if(email==='' || regexEmail.test(email)===false) {
            setDisplayAlert(true);
            setAlertMessage(['warning', 'Por favor ingrese  una dirección de correo válida']);
        }
        else {
            setDisplayLoader(true);
            setDisableField(true);
            fetch(`https://fletesya.cl/api/mail`, {
                headers:{
                    'Content-Type': 'application/json'
                  },
                method:'POST',
                body: JSON.stringify({mail: email, yachana: true})
            })
            .then(res => {
                setEmail('');
                setDisplayAlert(true);
                setAlertMessage(['success','Suscripción realizada exitosamente']);
                setDisplayLoader(false);
                setDisableField(false);
            })
            .catch(error => {
                setDisplayLoader(false);
                setDisableField(false);
                setDisplayAlert(true);
                setAlertMessage(['error', 'Error de conexión']);
            })
        }
    }

    return (            
        <div id='contacto'>
            <img src='/bottom.png' draggable={false} style={{width:'100vw', marginTop: '-2px'}}/>
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
                <Grid item lg={3} sm={11} style={{margin:'0 auto', maxWidth:'85%'}}>
                    <p style={{fontSize:'22px', fontFamily:'fellix'}}>
                        ¿Quieres recibir notificaciones sobre nuevos cursos y programas de certificación?<br/><strong>Suscríbete</strong><br/><br/>                 
                        { displayLoader? <div className='loader' style={{marginTop:'0px', marginBottom:'20px'}}> <CircularProgress size='50px' style={{color:'white'}} /> </div> : null}
                        { displayAlert
                        ? <div style={{fontSize:'16px', maxWidth:'80%', margin: 'auto'}}> <strong style={alertMessage[0]==='success'? {color:'white'} : {color: 'red'}}> {alertMessage[1]} </strong> <br /> <br /> </div>     
                        : null }
                        <TextField
                            label="Correo electrónico"
                            variant="filled"
                            value={email}
                            disabled={disableField}
                            onChange={e => setEmail(e.target.value)} 
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
                        <a onClick={() => displayLoader? null: subscribe()} style={{color:'white'}} style={{padding:'15px', margin:'10px', backgroundColor:'rgb(10,113,144)', fontSize:'15px', color:'white', borderRadius:'3px', cursor:'pointer'}}>ENVIAR</a> 
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}