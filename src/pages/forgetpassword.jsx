import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import {Button} from '@material-ui/core';
import logo from '../assets/image/Iphone_Xs-Artwork-Project_Managers.png'
import logoName from '../assets/Icons/1280px-Namecheap_Logo.svg.png'
import { Grid } from '@material-ui/core';
import '../css/style.css'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/forms/loginForm'
import TextField from '@material-ui/core/TextField';



class ForgetPassword extends Component {
    render() { 
        return ( <div style={{width:'100%'}} >
            <PublicLayout para='We are dedicated to delivering data 
            that defines your purpose. Our vault holds significant data to cater your requirements.'
                          logo={logo}
                          header='We help you to archive your goals'>
                <br/>
                               <br/>

                <Grid container xs={12}  style={{width:'100%' ,height:'100%'}} alignItems='center'  >
                        <Grid xs={3} item/>
                        <Grid xs={6} item  >
                        <h1 className='head'>Forgot password</h1>
                       
                            <ForgetPasswordInput/>
                            <Button fullWidth color='primary' variant='contained'>RESET PASSWORD</Button>
                        </Grid>       
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
           </div>
         );
    }
}
                  
export default ForgetPassword;


export  function ForgetPasswordInput() {

  return (
    
    <FormControl fullWidth >
    <label shrink htmlFor="bootstrap-input" className='label'>
    Email
    </label>
    <BootstrapInput  id="username"  placeholder='Enter your email'/>
    <br/>
    
   
  </FormControl>
     
    
  );
}