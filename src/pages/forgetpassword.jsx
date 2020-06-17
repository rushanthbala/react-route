import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import {Button} from '@material-ui/core';
import logo from '../Assets/Iphone_Xs-Artwork-Project_Managers.png'
import logoName from '../Assets/Icons/1280px-Namecheap_Logo.svg.png'
import { Grid } from '@material-ui/core';
import '../css/style.css'
  import FormControl from '@material-ui/core/FormControl';
  import BootstrapInput from '../components/layouts/form'

class ForgetPassword extends Component {
   
    render() { 
        return ( <div style={{width:'100%'}} >
            <PublicLayout para='Work faster and smarter with our readily 
            updated datasets at your disposal. We deliver regulated data
             for better performance.'
                          logo={logo}
                          header='Instant Datasets at your fingertips'>
                <br/>
                                <img src={logoName} alt="" srcset="" className='nameCheap' /><br/>

                <Grid container xs={12}  >
                        <Grid xs={3} item/>
                        <Grid xs={6} item>
                        </Grid>       
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
           </div>
         );
    }
}
                  
export default ForgetPassword;


export  function CustomizedInputs() {

  return (
    
      <FormControl fullWidth >
       
      </FormControl>
     
    
  );
}