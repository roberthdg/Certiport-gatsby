import React, { useState } from 'react';

const testimonios = [
    {
        cita:'"Me permitió adquirir mayores habilidades y destrezas en el manejo de proyectos BIM a través de Revit, mi campo laboral se ha expandido y ahora puedo desarrollar actividades con mayor precisión y detalle gracias a esta herramienta."',
        autor: 'Johanna Rojas',
        profesion: 'Especialización BIM Arquitectura Paramétrica'
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
        <div className='testimonios'>
            <img src="/testimonios.jpg" alt='testimonios' className='quoteImage'/>
            <p style={{ fontFamily:'fellix'}}>
                <br />
                {testimonios[current].cita} <br />
                <div className='autor'>{testimonios[current].autor} <br /> </div>
                <div className='profesion'>{testimonios[current].profesion} </div>
            </p>
            {testimonios.map((item, i) => (
                <span className={current===i? 'punto active' : 'punto'} onClick={() => setCurrent(i)} id='contactanos'/>
            ))}
        </div>
    );
}