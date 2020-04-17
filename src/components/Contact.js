import React from 'react';
import Grid from '@material-ui/core/Grid';

export default function Content(props) {
    return (            
        <div id='contacto' style={{marginTop:'6vw', width:'100%', height:'500px', textAlign:'center', color: 'white'}}>
            <img src='/bottom.png' draggable={false} style={{width:'100vw'}}/>

            <Grid container style={{marginTop:'60px'}}>
                <Grid item lg={6}>
                    <img src='/footer.png' style={{width: '250px'}}/>
                </Grid>
                <Grid item lg={5}>
                    <p>
                        Encaminados en el esfuerzo hacia la optimización de la enseñanza de herramientas de computación para estudiantes, profesionales y personas interesadas en general, 
                        que deseen mejorar su formación, haciendo más rentables sus servicios, en las áreas de Ingeniería, Arquitectura, Diseño y Ofimática.
                    </p>
                </Grid>
            </Grid>
        </div>
    );
}