import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const div = {
    background:'rgb(239,240,244)',
    marginTop: '5%'
}

let courses = [
    {},{},{}
]

export default function Content(props) {
    return (
        <>
        <div className={props.classes.root} id='Calendario' style={div}>
            <br></br><br></br><Typography variant='h4'>Próximos cursos <strong>OnLine</strong></Typography><br></br>
            <Grid container  style={{maxWidth:'1800px', margin:'auto'}}>
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
            <br></br><br></br><br></br><br></br>
        </div>
        
        </>
    );
}