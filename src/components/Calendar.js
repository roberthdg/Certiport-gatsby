import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const div = {
    background:'rgb(239,240,244)',
    marginTop: '5%'
}

export default function Content(props) {
    return (
        <div className={props.classes.root} id='Calendario' style={div}>
             <br></br><br></br><Typography variant='h4'>Proximos cursos <strong>OnLine</strong></Typography><br></br>

             <Grid container>
                <Grid item lg={4}>
                    <img className='curso' src='/cursos/1.jpg'/>
                </Grid>
                <Grid item  lg={4}>
                    <img className='curso'src='/cursos/2.jpg'/>
                </Grid>
                <Grid item  lg={4}>
                    <img className='curso' src='/cursos/3.jpg'/>
                </Grid>
             </Grid>

             <br></br><br></br><br></br><br></br>
        </div>
    );
}