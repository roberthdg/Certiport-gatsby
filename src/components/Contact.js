import React from 'react';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

export default function Content(props) {
    return (
        <div id='contactanos' style={{marginTop:'100px', width:'100%'}}>
            <Typography variant='h4'>
                ¿Listo para crear experiencias? <strong>Contáctanos</strong>
            </Typography>
            <form noValidate autoComplete="off" style={{padding:'100px'}}>
                <Input defaultValue="Nombre" inputProps={{ 'aria-label': 'description' }} />
                <Input placeholder="Placeholder" inputProps={{ 'aria-label': 'description' }} />
                <Input defaultValue="Error" error inputProps={{ 'aria-label': 'description' }} />
            </form>
        </div>
    );
}