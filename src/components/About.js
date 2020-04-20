import React from 'react';
import Box from '@material-ui/core/Box';

export default function Content(props) {
    return (
        <div id='nosotros' style={{marginTop:'44vw', width:'100%'}}>
            <Box display="flex" width='100%'>
                <Box m="auto" className='aboutBox1'>  
                <span className='aboutText'>Cursos Online | Presenciales</span> <br/>
                <span className='aboutText2'>Un mundo de posibilidades para tu formación</span>
                </Box>
            </Box>
        
            <Box display="flex" width='100%'>
                <Box m="auto" className='aboutBox2'>
                    En <strong>Yachana</strong> nos especializamos por tener a tu disposición los mejores cursos de capacitación para diferentes áreas de diseño y edición, con profesores altamente calificados y certificación 
                    internacional avalada por <strong >Autodesk®</strong>, permitiéndote tener la mejor experiencia en estudios a distancia. 
                </Box>
            </Box>
        </div>
    );
}