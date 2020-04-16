import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'
import Courses from './Courses'
import Calendar from './Calendar'

export default function Content(props) {
    return (
        <main>    
            <div style={{marginTop:'35vh', top: '0', marginLeft:'16vw', color:'white', position: 'absolute'}}>
                <Typography variant='h4' style={{fontFamily: 'Fellix', lineHeight:'55px'}}>
                    <span style={{fontSize:'70px'}}>Tu camino al <strong>ÉXITO</strong> </span> <br />
                    Mejora tus habilidades con cursos y certificaciones online <br />
                    <a className='button' onClick={()=> props.scrollTo(document.getElementById('servicios'))}> Más información</a>
                </Typography>           
                
            </div>

            <div id='nosotros' style={{marginTop:'44vw', width:'100%', textAlign:'center'}}>
                <Box display="flex" width='100%'>
                    <Box m="auto" style={{paddingTop:'100px',fontFamily: 'Fellix', paddingBottom:'30px', fontWeight: '300', fontSize:'60px', maxWidth:'30%', lineHeight:'70px'}}>  
                    <span style={{color: 'rgb(109,109,132)', fontSize:'25px', fontWeight: '500'}}>Cursos Online | Presenciales</span> <br/>
                    Un mundo de posibilidades para tu  formación
                    </Box>
                </Box>
            
                <Box display="flex" width='100%'>
                    <Box m="auto" style={{fontWeight: '300', maxWidth:'60%', fontSize:'25px'}}>
                        En <strong>Yachana</strong> nos especializamos por tener a tu disposición los mejores cursos de capacitación para diferentes áreas de especialización. 
                        Contamos con una plataforma diseñada especialmente para cursos en línea, con profesores preparados y trabajando actualmente en su área y certificación 
                        internacional avalada por <strong >Autodesk®</strong> lo que te permitirá tener la mejor experiencia en estudios a distancia. 
                    </Box>
                </Box>
            
                <Courses classes={props.classes}/>

                <Calendar classes={props.classes}/>

            </div>
            
            <div id='contacto' style={{marginTop:'6vw', width:'100%', height:'500px', textAlign:'center', color: 'white'}}>
                <img src='https://fletesya.cl/img/gatsby/bottom.png' draggable={false}/>
                <img src='https://fletesya.cl/img/gatsby/footer.png' style={{marginTop:'50px'}}/>
                <p>
                Encaminados en el esfuerzo hacia la optimización de la enseñanza de herramientas de computación para estudiantes, profesionales y personas interesadas en general, 
                que deseen mejorar su formación, haciendo más rentables sus servicios, en las áreas de Ingeniería, Arquitectura, Diseño y Ofimática.
                </p>
            </div>

            <div style={{width:'100%', height:'40px', paddingTop:'10px', paddingLeft:'10vw', marginTop:'-2vh', background:'rgb(31,84,115)', color:'white'}}>
                    Certiport © 2020 | Designed by <a href='https://github.com/roberthdg' target='_blank' style={{textDecoration:'none', color: 'white'}}><strong>Roberth Gómez</strong></a>           
            </div>
        </main>
    );
}