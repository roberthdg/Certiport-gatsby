import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

let courses = [
    {
        name:'Revit',
        description: 'Desarrollo de modelos avanzados de planos arquitectónicos e ingenieria. Manejo de herramientas de alta precisión para la construcción de modelos de información.'
    },
    {
        name:'Fusion 360 / Inventor',
        description: 'Diseño, modificación, reparación y documentación de modelos CAD 3D. Creación de ensamblajes y rutas de herramientas multiplataforma con CAM integrado.'
    },
    {
        name:'AutoCAD',
        description: 'Conceptualización de ideas, diseño de productos y simulación de piezas en el área de manufactura. Trabajo con planos en dos y tres dimensiones, creación de renderizados fotorrealistas.'
    }
]

const div = {
    background:'rgb(241,246,248)',
    marginTop: '100px',
    paddingTop:'100px',
    paddingBottom:'100px',
}

export default function Content(props) {
    return (
        <div className={props.classes.root} id='cursos' style={div}>
            <Typography variant='h4'>Próximos cursos <strong>OnLine</strong></Typography>
            <Grid container  style={{maxWidth:'1800px', margin:'auto', marginTop:'10px'}}>
                {courses.map((course, i) => (
                    <Grid item sm={11} lg={4}
                        spacing={0}
                        align="center"
                    >
                        <Card className={props.classes.card}>
                            <CardActionArea>
                                <CardMedia
                                className={props.classes.media}
                                image={`/cursos/${i+1}.jpg`}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {course.name} 
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {course.description}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" style={{margin:'auto'}}>
                                Regístrate
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)
                )}  
            </Grid>
        </div>
    );
}