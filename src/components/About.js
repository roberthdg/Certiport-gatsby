import React from 'react';
import Box from '@material-ui/core/Box';

export default function Content(props) {
    return (
        <div id='nosotros' style={{marginTop:'44vw', width:'100%'}}>
            <Box display="flex" width='100%'>
                <Box m="auto" style={{paddingTop:'100px',fontFamily: 'Fellix', paddingBottom:'30px', fontWeight: '300', fontSize:'60px', maxWidth:'30%', lineHeight:'70px'}}>  
                <span style={{color: 'rgb(109,109,132)', fontSize:'25px', fontWeight: '500'}}>Cursos Online | Presenciales</span> <br/>
                Un mundo de posibilidades para tu  formación
                </Box>
            </Box>
        
            <Box display="flex" width='100%'>
                <Box m="auto" style={{fontWeight: '300', maxWidth:'60%', fontSize:'25px'}}>
                    En <strong>Yachana</strong> nos especializamos por tener a tu disposición los mejores cursos de capacitación para diferentes áreas de especialización. 
                    Contamos con una plataforma diseñada especialmente para cursos en línea, con profesores preparados y trabajando actualmente en su área y certificación 
                    internacional avalada por <strong >Autodesk®</strong> lo que te permitirá tener la mejor experiencia en estudios a distancia. 
                </Box>
            </Box>
        </div>
    );
}