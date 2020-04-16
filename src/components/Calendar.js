import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const div = {
    background:'rgb(226,226,226)',
    marginTop: '5%'
}


export default function Content(props) {
    return (
        <div className={props.classes.root} id='Calendario' style={div}>
             <br></br><br></br><Typography>Proximos cursos <strong>OnLine</strong></Typography><br></br><br></br>

             <Grid container>
                <Grid item lg={4}>
                    <img className='curso' src='/static/cursos/1.jpg'/>
                </Grid>
                <Grid item  lg={4}>
                    <img className='curso'src='/static/cursos/2.jpg'/>
                </Grid>
                <Grid item  lg={4}>
                    <img className='curso' src='/static/cursos/3.jpg'/>
                </Grid>
             </Grid>

             <br></br><br></br><br></br><br></br>
        </div>
    );
}