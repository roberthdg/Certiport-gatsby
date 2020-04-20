import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';

const testimonios = [
    {
        cita:'"Me permitió adquirir mayores habilidades y destrezas en el manejo de proyectos BIM a través de Revit, mi campo laboral se ha expandido y ahora puedo desarrollar con más detalles proyectos gracias a esta herramienta."',
        autor: 'Johanna Rojas',
        profesion: 'Especializacion BIM Arquitectura Parametrica'
    },
    {
        cita:'"En mi capacitación, además del correcto uso del software, pude comprender la importancia de un buen modelo para detectar interferencias entre múltiples disciplinas y así corregir posibles fallas durante la ejecución del proyecto."',
        autor: 'Nicolás Peñalver',
        profesion: 'Ingeniero mecánico'
    },
    {
        cita:'"La experiencia en los cursos de Fusion 360 e Inventor fueron muy buenas, me ayudaron a generar mejor entendimiento en diseño de productos en mi carrera y también como desarrollo de mis habilidades personales."',
        autor: 'Manuel Alayón',
        profesion: 'Estudiante de diseño industrial'
    },
    {  
        cita:'"El beneficio principal a nivel profesional es notable, las herramientas aprendidas me permiten trabajar de manera práctica y rápida en la extracción y manejo de información relevante al proyecto."',
        autor: 'Kairaly Rojas',
        profesion: 'Arquitecto'
    }
]

export default function Content(props) {
    const [current, setCurrent] = useState(0);
 
    return (
        <div style={{marginTop:'100px', width:'100%'}}>
            <div className='testimonios'>
                <img src="/testimonios.png" alt='testimonios' className='quoteImage'/>
                <p style={{ fontFamily:'fellix'}}>
                    <br />
                    {testimonios[current].cita} <br />
                    <div className='autor'>{testimonios[current].autor} <br /> </div>
                    <div className='profesion'>{testimonios[current].profesion} </div>
                </p>
                {testimonios.map((item, i) => (
                    <span className={current===i? 'punto active' : 'punto'} onClick={() => setCurrent(i)} />
                ))}
            </div>
            <Typography variant='h4' style={{ fontFamily:'fellix'}}>
                ¿Listo para crear experiencias? <br/>
                <strong>Comunícate con nosotros</strong>
            </Typography> 
            <Grid container spacing={9} style={{maxWidth: '50%', margin:'40px auto'}}> 
                <Grid item lg={6} sm={11} style={{margin: '10px auto'}}>
                    <TextField label="Nombre" fullWidth/>
                </Grid>
                <Grid item lg={6} sm={11} style={{margin: '10px auto'}}>
                <TextField label="Correo" fullWidth/>
                </Grid>
                <Grid item lg={11} sm={11} style={{margin: '10px auto'}}>
                    <TextField label="Mensaje" fullWidth/>
                </Grid>
            </Grid>
        </div>
    );
}