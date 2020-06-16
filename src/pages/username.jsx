import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PublicLayout from '../components/layouts/publicLayout';
import logo from '../Assets/Complete_your_account.png'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/layouts/form'
import {Button} from '@material-ui/core';


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


export  function UsernameInput() {

    return (
      
        <FormControl fullWidth >
            <h1 className='create' >Create your account</h1>
          <label shrink htmlFor="bootstrap-input" className='label' >
          First name
          </label>
          <BootstrapInput  id="username"  placeholder='First name' defaultValue="Gobinthiran"/>

          <br/>
          <label shrink htmlFor="bootstrap-input" className='label'>
          Last name
          </label>
          <BootstrapInput  id="password" placeholder='Typed text' defaultValue="Kulendran"/>
          <br/>
          <label shrink htmlFor="bootstrap-input" className='label'>
          Organization
          </label>
          <BootstrapInput  id="username"  placeholder='Place holder' defaultValue="Aatral Organization"/>

          <br/>
          <label shrink htmlFor="bootstrap-input" className='label'>
          Email
          </label>
          <BootstrapInput  id="password" placeholder='Typed text' defaultValue="gobinthiran@huex.studio" />
          <br/>
          <label shrink htmlFor="bootstrap-input" className='label'>
          Phone number
          </label>
          <BootstrapInput  id="username"  placeholder='Enter your phone number' />

          <br/>
          <label shrink htmlFor="bootstrap-input" className='label'>
            Password
          </label>
          <BootstrapInput  id="password" placeholder='Typed text' />

         
        </FormControl>
       
      
    );
  }