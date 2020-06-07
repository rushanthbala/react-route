import React, { Component } from 'react';
import {Button,ThemeProvider} from '@material-ui/core';
import {theme} from '../theme/theme';
import {themee} from '../theme/theme';
import Box from '@material-ui/core/Box';


class Sample extends Component {
    render() { 
        return ( 
          <ThemeProvider theme={theme} >     
             <h1>hello</h1>   
             <Button color="primary" variant="contained">Hello World</Button>
              <Box component="span"  m={2}>
    
               <h1>hello</h1>   
               <h1>hello</h1>   

               <ThemeProvider theme={themee} m={5}>
               <Button color="primary" variant="contained">Hello World</Button>
               <Button color="primary" variant="contained">Hello World</Button>
               <Button color="primary" variant="contained">Hello World</Button>

              </ThemeProvider>               
 

</Box>
            </ThemeProvider>
         );
    }
}
 
export default Sample;