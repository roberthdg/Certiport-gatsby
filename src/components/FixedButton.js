import React, { useEffect } from 'react';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';

const FixedButton = (props) => {
    useEffect(() => {
        loadCSS(
          'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
          document.querySelector('#font-awesome-css'),
        );
      }, []);  
    
    return (
        props.type==='scrollTo'
        ?<a onClick={()=> props.scrollTo(document.getElementById('inicio'))} className='fixedButton'><Icon style={{fontSize:'32px', color: 'white'}} className="fa fa-2x fa-arrow-up"/></a>
        :<a target="_blank" rel="noopener noreferrer" href="https://wa.me/593983201675" className='fixedButton whatsapp'><Icon style={{fontSize:'38px', color: 'white'}} className="fab fa-2x fa-whatsapp"/></a>
        )
}

export default FixedButton