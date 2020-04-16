import React from 'react';
import Appbar from '../components/Appbar';
import Typography from '@material-ui/core/Typography';

export default function Header(props) {
    return (
        <header>
            <img src='https://fletesya.cl/img/gatsby/background.jpeg' id='inicio' className='background' draggable={false} />
            <div style={{marginTop:'35vh', top: '0', marginLeft:'16vw', color:'white', position: 'absolute'}}>
                <Typography variant='h4' style={{fontFamily: 'Fellix', lineHeight:'55px'}}>
                    <span style={{fontSize:'70px'}}>Tu camino al <strong>ÉXITO</strong> </span> <br />
                    Mejora tus habilidades con cursos y certificaciones online <br />
                    <a className='button' onClick={()=> props.scrollTo(document.getElementById('servicios'))}> Más información</a>
                </Typography>             
            </div>
            <Appbar classes={props.classes} trigger={props.trigger} scrollTo={props.scrollTo}/>
        </header>
    );
}