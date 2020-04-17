import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Content(props) {
    return (            
        <div id='contacto' style={{marginTop:'6vw', width:'100%', height:'600px', textAlign:'center', color: 'white'}}>
            <img src='/bottom.png' draggable={false} style={{width:'100vw'}}/>

            <Grid container style={{marginTop:'100px'}}>
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
                <Grid item lg={5}>
                 
                </Grid>
            </Grid>

        </div>
    );
}