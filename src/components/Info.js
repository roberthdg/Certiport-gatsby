import React from 'react';
import Grid from '@material-ui/core/Grid';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import LocalPhoneOutlinedIcon from '@material-ui/icons/LocalPhoneOutlined';
import MailOutlineOutlinedIcon from '@material-ui/icons/MailOutlineOutlined';

export default function Content(props) {
    return (            
        <div id='contacto' style={{marginTop:'6vw', width:'100%', height:'700px', textAlign:'center', color: 'white'}}>
            <img src='/bottom.png' draggable={false} style={{width:'100vw'}}/>
            <Grid container style={{marginTop:'120px'}}>
                <Grid item lg={3} style={{maxWidth: '330px', margin:'auto'}} >
                    <img src='/logo_blue.png' style={{width: '330px'}}/> <br/>
                    <p style={{fontSize:'19px'}}>
                        Encaminados en el esfuerzo hacia la optimización de la enseñanza de herramientas 
                        de computación para estudiantes y profesionales, haciendo más rentables sus servicios en 
                        las áreas de <strong>Ingeniería, Arquitectura, Diseño y Ofimática</strong>.
                    </p> <br/>
                    <img src='/autodesk1.png' style={{width: '120px'}}/>  
                    <img src='/autodesk2.png' style={{width: '120px', marginLeft:'30px'}}/> <br/>
                </Grid>
                <Grid item lg={5} style={{maxWidth: '330px', margin:'auto'}} >
                    <p style={{fontSize:'16px'}}>
                        <RoomOutlinedIcon /> Edificio Parque Central, Shyris, Av. Eloy Alfaro N23-43. Quito 170135, Ecuador. <br/><br/>
                        <LocalPhoneOutlinedIcon /> +593983201675  <br/><br/>
                        <MailOutlineOutlinedIcon /> sales@centrodecapacitacion.com  <br/><br/>
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}