import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const cursos = [
    {
        titulo:'Arquitectura',
        descripcion:'Dibujo, Diseño y Visualización de Modelos Arquitectónicos'
    },
    {
        titulo:'Ingeniería y construcción',
        descripcion:'Dibujo, Diseño y Cálculo de Obras Civiles'
    },
    {
        titulo:'Manufactura',
        descripcion:'Dibujo, Diseño y Cálculo de Prototipos Digitales'
    },
    {
        titulo:'Modelado y animación 3d',
        descripcion:'Dibujo, Texturización, Render y Animación de Objetos y Personajes'
    },
    {
        titulo:'Post-producción',
        descripcion:'Edición de Videos, Compisición, Animación de Efectos'
    },
    {
        titulo:'Web',
        descripcion:'Diseño, Creación y Gestión de Sitios Web'
    },
    {
        titulo:'Diseño gráfico e impresos',
        descripcion:'Diseño y Composición de Arte'
    },
    {
        titulo:'Ofimática',
        descripcion:'Aplicaciones y Herramientas Informáticas Especializadas para Mejorar el Trabajo de Oficina'
    },
]

export default function Content(props) {
    const [active, setActive] = useState()
    return (
        <div className={props.classes.root} id='servicios'>
            <Grid container>
                {cursos.map((curso, i) => (
                    <Grid sm={3} md={3} lg={3} key={i}>
                        <div className='cursoDiv' onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(false)}>
                            <div className={active===i? 'cursoFiltro' : null}/>
                            <Typography style={active===i?  {marginTop: '9vw',transition:'0.6s'} : { marginTop:'10vw', transition:'0.6s'}}>
                                <span className='titulo'>{curso.titulo}</span> <br />
                                <span className='descripcion'><br />{curso.descripcion}</span>
                            </Typography>
                        </div>
                        <img src={`/curso${i+1}.jpg`} className={active===i? 'curso activo' : 'curso'}/> 
                    </Grid>
                    )
                )}
            </Grid>
        </div>
    );
}