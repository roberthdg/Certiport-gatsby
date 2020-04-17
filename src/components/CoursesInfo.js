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
        titulo:'Modelado y animación 3d',
        descripcion:'Dibujo, Texturización, Render y Animación de Objetos y Personajes'
    },
    {
        titulo:'Post-producción',
        descripcion:'Edición de Videos, Compisición, Animación de Efectos'
    },
    {
        titulo:'Web',
        descripcion:'Diseño, Creación y Gestión de Aplicaciones y Herramientas Informáticas'
    },
    {
        titulo:'Diseño gráfico e impresos',
        descripcion:'Diseño y Composición de Arte'
    },
]

export default function Content(props) {
    const [active, setActive] = useState()
    return (
        <div className={props.classes.root}>
            <Grid container align="center" style={{maxWidth:'1500px', margin:'auto'}}>
                {cursos.map((curso, i) => (
                    <Grid item sm={11} md={11} lg={4} align="center" key={i} style={{paddingTop:'50px'}}>
                        <div onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(false)}>
                            <div className='cursoBorder'>
                            <div className={active===i? 'cursoFiltro' : null} />
                            <img src={`/curso${i+1}.jpg`} className={active===i? 'curso activo' : 'curso'}/>
                            <Typography className={active===i? 'cursoTitulo hover' : 'cursoTitulo'}>
                                <span className='titulo'>{curso.titulo}</span> <br />
                                <span className='descripcion'><br />{curso.descripcion}</span>
                            </Typography>
                            </div>
                        </div>
                    </Grid>
                    )
                )}
            </Grid>
        </div>
    );
}