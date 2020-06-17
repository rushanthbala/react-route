import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import { Button } from '@material-ui/core';
import logo from '../Assets/Iphone_Xs-Artwork-Project_Managers.png'
import logoName from '../Assets/Icons/Approval.svg'
import { Grid } from '@material-ui/core';
import '../css/style.css'
import FormControl from '@material-ui/core/FormControl';
import BootstrapInput from '../components/layouts/form'


class Failed extends Component {
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
                <Grid xs={3} item />
                <Grid xs={6} item>
                  <h1 className='head' >Your account creation is failed!</h1>
                  <p className='paragrape' >Please check your information and try again.</p>
                  <Button fullWidth  color="primary" variant="contained" >GO BACK</Button>
                </Grid>
                <Grid xs={3} item />
            </Grid>
        </PublicLayout>
    </div>
    );
}
}


export default Failed;


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