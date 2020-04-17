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
    {},{},{}
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
                                        Lorem ipsum 
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Regístrate
                                </Button>
                                <Button size="small" color="primary">
                                Contáctanos
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>)
                )}  
            </Grid>
        </div>
    );
}