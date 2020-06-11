import React, { Component } from 'react';
// import {Button,ThemeProvider} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


class Username extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Grid container spacing={0}>
                  <Grid item xs={6}><Picture/> </Grid> 
                  <Grid  item xs={6}><Sign/> </Grid>
                </Grid>
            </div>
          );
    }
}
 
export default Username;




class Picture extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
                <Grid  container  direction="row"  justify="center" >
                <Grid  item spacing={2}>
                    <img style={{marginTop:'147px'}} src='Iphone Xs-Artwork-Project_Managers.png' className=" img" alt="logo" />
                    <div>
                    <h1 style={{
                        textAlign: 'center',
                        font:' Bold 26px/40px PT Sans',
                        letterSpacing: '0px',
                        color: '#181D33',
                        marginTop:31,
                        opacity: 1}}>
                    Standard Catalogued Data</h1>
                                       </div>
                   <p></p>
                </Grid>
                <p style={{
                        textAlign: 'center',
                        font: 'Regular 15px/19px PT Sans',
                        letterSpacing:' 0px',
                        color:' #181D33',
                        opacity:' 0.48',
                    }}>Large volumes of diverse data systematically categorized based on distinct criteria for easy and effective filtering of the necessary information.</p>
                </Grid>
      </div>          
         );
    }
}
 
class Sign extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                okoko
            </div>
         );
    }
}
 
