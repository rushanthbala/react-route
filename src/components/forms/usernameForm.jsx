import {
    createStyles,
    Theme,
    withStyles,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import TextField, { TextFieldProps } from '@material-ui/core/TextField';
  import React, { Component } from 'react';
  import {Button} from '@material-ui/core';
 import { Grid } from '@material-ui/core';
 import FormControl from '@material-ui/core/FormControl';


 
 const BootstrapInput = withStyles((theme: Theme) =>
 createStyles({
   root: {
     'label + &': {
       marginTop: '0px',
         
     },
   },
   inputPlaceholder: { /* Internet Explorer 10-11 */
     color:'#181D333E'
    },
   input: {
     borderRadius: 4,
     position: 'relative',
     background:'#FFFFFF 0% 0% noRepeat paddingBox',
     backgroundColor: theme.palette.common.white,
     border: '1px solid #ced4da',
     letterSpacing:'0px',
     fontSize: 16,
     width: '100%',
     padding: '10px 12px',
     opacity: 1,
     color:'#181D33',
     // Use the system font instead of the default Roboto font.
     font:' Regular 14px/18px PT Sans',
     '&:focus': {
       boxShadow: `0px 0px 8px #0000000A`,
       borderColor:'  0.75px solid #3F44511F',
     },
   },
 }),
)(InputBase);




 function UsernameInput() {

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

  export default UsernameInput
