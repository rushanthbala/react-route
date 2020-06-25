import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import { Button } from '@material-ui/core';
import logo from '../assets/images/a.png'
import logoName from '../assets/Icons/Approval.svg'
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/forms/LoginForm'


class ConfirmationEmail extends Component {
render() {
    return (<div style={{ width: '100%' }} >
        <PublicLayout 
            para='Streaming highly reliable and 
            accurate qualitative data from trusted sources for
             lucid analysis and effective decision making.'
            logo={logo}
            header='Integrous data collections'>
            <br />
            <img src={logoName} alt="" srcset="" className='nameCheap' /><br />

            <Grid container xs={12}  >
                <Grid xs={2} item />
                <Grid xs={7} item>
                  <h1 className='head' >Confirmation email has been sent!</h1>
                  <p className='paragrape' >Please check your email inbox and click on the “Reset password” button.</p>
                  <Button fullWidth  color="primary" variant="contained" > BACK TO SIGN IN PAGE</Button>
                </Grid>
                <Grid xs={2} item />
            </Grid>
        </PublicLayout>
    </div>
    );
}
}


export default ConfirmationEmail;


export function CustomizedInputs() {
return (
    <FormControl fullWidth >
        <label shrink htmlFor="bootstrap-input" className='label'>
            Username
        </label>
         <BootstrapInput id="username" placeholder='Place holder' />
           <br />
        <label shrink htmlFor="bootstrap-input" className='label'>
            Password
        </label>
        <BootstrapInput id="password" placeholder='Typed text' />
    </FormControl>
);
}



                    