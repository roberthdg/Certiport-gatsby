import React, {useEffect, useRef} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const navStyle={
    position:'absolute', 
    right: '0', 
    margin:' 26px 20% 0 0',
    fontSize: '17px',
    cursor:'pointer'
}


function Appbar(props) {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
  
    const handleToggle = () => {
      setOpen((prevOpen) => !prevOpen);
    };
  
    function handleClose(element) {
        props.scrollTo(document.getElementById(element));
    };
  
    function handleListKeyDown(event) {
      if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
      }
    }
  
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
      if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
      }
      prevOpen.current = open;
    }, [open]);

    return (
        <>    
        <AppBar className={props.trigger ? props.classes.appBarScroll : props.classes.appBarTop}>
            <Toolbar>
                <img src={props.trigger ? '/logo.png' : '/logo_white.png'} className={props.trigger ? 'topLogo' : 'logo'} draggable={false} />
            </Toolbar>
            <Typography style={navStyle} className='navBar'> 
                <span onClick={()=> props.scrollTo(document.getElementById('inicio'))} className={props.trigger ? 'navItem' : 'navItem top'}> Inicio </span>
                <span onClick={()=> props.scrollTo(document.getElementById('nosotros'))}  className={props.trigger ? 'navItem' : 'navItem top'}> Nosotros </span>
                <span onClick={()=> props.scrollTo(document.getElementById('cursos'))}  className={props.trigger ? 'navItem' : 'navItem top'}> Cursos </span>
                <span onClick={()=> props.scrollTo(document.getElementById('contacto'))} className={props.trigger ? 'navItem' : 'navItem top'}> Contáctanos </span>
            </Typography>
            <div className={props.trigger ? 'toggle' : 'toggle scroll'}>
                <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
                >
                <MoreVertIcon style={props.trigger ? {color:'black', fontSize:'30px', transition:'0.3s'} : {color:'white', fontSize:'35px'}}/>
                </Button>
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                        {...TransitionProps}
                        style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                        <Paper>
                            <ClickAwayListener onClickAway={()=> setOpen(false)}>
                            <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                <MenuItem onClick={() => handleClose('inicio')}>Inicio</MenuItem>
                                <MenuItem onClick={() => handleClose('us')}>Nosotros</MenuItem>
                                <MenuItem onClick={() => handleClose('cursos')}>Cursos</MenuItem>
                                <MenuItem onClick={() => handleClose('contactanos')}>Contáctanos</MenuItem>
                            </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
                </Popper>
            </div>
        </AppBar>
        </>
    );
}

export default Appbar;