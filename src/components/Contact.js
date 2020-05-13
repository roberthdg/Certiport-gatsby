import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function Content(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [displayAlert, setDisplayAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [displayLoader, setDisplayLoader] = useState(false);
    const [disableField, setDisableField] = useState(false);
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   

    function sendMessage() {
        setDisplayAlert(false);
        
        if(email=='' || message=='') {
            setDisplayAlert(true);
            setAlertMessage(['warning', 'Debes llenar todos los campos requeridos']);
        }
        else if(regexEmail.test(email)==false) {
            setDisplayAlert(true);
            setAlertMessage(['warning', 'Por favor ingrese una dirección de correo válida']);
        }
        else {
            setDisplayLoader(true);
            setDisableField(true);
            fetch(`https://fletesya.cl/api/mail`, {
                headers:{
                    'Content-Type': 'application/json'
                  },
                method:'POST',
                body: JSON.stringify({mail: email, message: message, yachana: true})
            })
            .then(res => {
                setName('');
                setEmail('');
                setMessage('');
                setDisplayAlert(true);
                setAlertMessage(['success','Mensaje enviado']);
                setDisplayLoader(false);
                setDisableField(false);
            })
            .catch(error => {
                setDisplayLoader(false);
                setDisableField(false);
                setDisplayAlert(true);
                setAlertMessage(['error', 'Error: el mensaje no pudo ser enviado']);
            })
        }
    }

    return (
        <div style={{margin:'100px auto 80px auto', width:'100%'}}>
            <Typography variant='h4' style={{ fontFamily:'fellix'}}>
                <div className='contactoTitulo'>
                    ¿Listo para crear experiencias? <br/>
                    <strong>Comunícate con nosotros</strong>
                </div>
            </Typography> 
            { displayLoader? <div className='loader'> <CircularProgress size='50px' style={{color:'rgb(62,121,161)'}} /> </div> : null}
            { displayAlert
            ? <div style={{fontSize:'16px', maxWidth:'80%', margin: 'auto'}}> <br /> <strong style={alertMessage[0]==='success'? {color:'green'} : {color: 'red'}}> {alertMessage[1]} </strong></div>     
            : null }
            <Grid container spacing={0} style={{maxWidth: '50%', margin:'30px auto'}}> 
                <Grid item lg={5} sm={11} style={{margin: '10px auto'}}>
                    <TextField 
                        value={name}
                        disabled={disableField}
                        onChange={e => setName(e.target.value)} 
                        label="Nombre" 
                        fullWidth
                    />
                </Grid> 
                <Grid item lg={5} sm={11} style={{margin: '10px auto'}}>
                <TextField 
                    label="Correo"
                    value={email}
                    disabled={disableField}
                    onChange={e => setEmail(e.target.value)} 
                    fullWidth
                />
                </Grid>
                <Grid item lg={11} sm={11} style={{margin: '30px auto'}}>
                    <TextField 
                        value={message}
                        disabled={disableField}
                        onChange={e => setMessage(e.target.value)}
                        label="Mensaje" 
                        fullWidth
                    />
                </Grid>
            </Grid>
            <a onClick={() => displayLoader? null: sendMessage()} className='button' style={{color:'white'}} > Enviar</a> 
        </div>
    );
}