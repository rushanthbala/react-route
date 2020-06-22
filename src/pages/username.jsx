import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PublicLayout from '../components/layouts/publicLayout';
import logo from '../assets/image/Complete_your_account.png'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/forms/loginForm'
import {Button} from '@material-ui/core';
import UsernameInput from '../components/forms/usernameForm'

class Username extends Component {
  
    state = {  }
    render() { 
        return (
            <PublicLayout para='Our platform is capable of communicating data in various graphical forms
             for better understanding and rational decision making.'
                          logo={logo}
                          header='Make decisions using multiple visualizations'>
                <br/>

                <Grid container xs={12}  >
               
                        <Grid xs={3} item/>
                        
                        <Grid xs={6} item>
                            <UsernameInput/>
                       <br/><br/> 
                <Button fullWidth variant="contained" color="primary">NEXT</Button>
                <p className='paragrape' style={{textAlign:'center'}}  >Already have an account?  <a href="">SIGN IN</a></p>
                            </Grid>       
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
          );
    }
}

export default Username;
