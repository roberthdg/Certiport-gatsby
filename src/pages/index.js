import React from 'react';
import Layout from '../containers/Layout';
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

function Index() {
  return (
    <ThemeProvider theme={theme}>
      <Layout />
    </ThemeProvider>
  )
}



export default Index;