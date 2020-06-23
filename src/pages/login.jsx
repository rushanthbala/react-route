import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import {Button} from '@material-ui/core';
import logo from '../assets/image/Iphone_Xs-Artwork-Project_Managers.png'
import logoName from '../assets/Icons/1280px-Namecheap_Logo.svg.png'
import { Grid } from '@material-ui/core';
import '../css/style.css'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/forms/loginForm'
import CustomizedInputs from '../components/forms/loginForm'

  
class Login extends Component {
   
    render() { 
        return ( <div style={{width:'100%'}} >
            <PublicLayout para='Large volumes of diverse data systematically categorized
                         based on distinct criteria for easy and effective filtering of the necessary
                         information.'
                          logo={logo}
                          header='Standard Catalogued Data'>
                <br/>
                                <img src={logoName} alt="" srcset="" className='nameCheap' /><br/>
                <Grid container xs={12}  >
                        <Grid xs={3} item/>
                        <Grid xs={6} item><CustomizedInputs/>
                                  <p className='paragrape'>  Forgot password? <a href="#">RESET</a></p> 
                          <Button fullWidth variant="contained" color="primary" type="submit">SIGN IN</Button>
                          <p className='paragrape' style={{textAlign:'center'}}  >Don’t you have an account?
                           <a href="">SIGNUP</a></p>
                            </Grid>       
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
           </div>
         );
    }
}
                  
export default Login;

