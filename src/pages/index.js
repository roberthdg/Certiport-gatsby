import React from 'react';
import Appbar from '../components/Appbar';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import '../styles/style.css'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          backgroundColor: 'white',
          overflowX: 'hidden'
        }
      }
    }
  }
});

function Layout() {
  return (
  <> 
    <ThemeProvider theme={theme}>
      <Appbar />
      <img src='https://fletesya.cl/img/gatsby/background.jpeg' id='inicio' className='background' draggable={false} />
    </ThemeProvider>
  </>
  )
}



export default Layout;