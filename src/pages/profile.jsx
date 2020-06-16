import React, { Component } from 'react';
import PublicLayout from '../components/layouts/publicLayout';
import {Button} from '@material-ui/core';
import logo from '../Assets/Set_profile_picture.png'
import logoName from '../Assets/Profile.png'
import { Grid } from '@material-ui/core';
import '../css/style.css'
  import FormControl from '@material-ui/core/FormControl';
  import BootstrapInput from '../components/layouts/form'
  import DeleteIcon from '../Assets/Icons/camera.svg';


class Profile extends Component {
   
    render() { 
        return ( <div style={{width:'100%'}} >
            <PublicLayout para='Streaming highly reliable and accurate qualitative 
            data from trusted sources for lucid analysis and effective decision making.'
                          logo={logo}
                          header='Integrous data collections'>
                <br/>
                <Grid container xs={12}  >
               
                        <Grid xs={3} item/>
                        <Grid xs={6} item justify='center'>
                            <h1 className=''>Set profile picture</h1>
                            <img src={logoName} alt="" srcset="" className='nameCheap'  /><br/>
                            <Button
                                variant="contained"
                                color="secondary"
                                className=''
                                // // // /// /// // / /// // /startIcon={DeleteIcon}
                            > button
                                </Button><br/><br/>
                                <Button 
                                variant="contained"
                                fullWidth
                                >COMPLETE</Button>
                         </Grid>       
                        <Grid xs={3} item/>
                </Grid>
           </PublicLayout>
           </div>
         );
    }
}
                  
export default Profile;


export  function CustomizedInputs() {

  return (
    
      <FormControl fullWidth >
        <label shrink htmlFor="bootstrap-input" className='label'>
          Username
        </label>
        <BootstrapInput  id="username"  placeholder='Place holder'/>
        <br/>
        <label shrink htmlFor="bootstrap-input" className='label'>
          Password
        </label>
        <BootstrapInput  id="password" placeholder='Typed text' />
      </FormControl>
  );
}        