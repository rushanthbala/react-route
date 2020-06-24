import {
    createStyles,
    Theme,
    withStyles,
  } from '@material-ui/core/styles';
  import InputBase from '@material-ui/core/InputBase';
  import TextField, { TextFieldProps } from '@material-ui/core/TextField';
  import React from 'react';
//   import {Button} from '@material-ui/core';
//  import { Grid } from '@material-ui/core';
 import FormControl from '@material-ui/core/FormControl';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';

 
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

const UserNameSchema = Yup.object().shape({
  firstName: Yup.string()
  .min(2, 'Too Short!')
  .max(50, 'Too Long!')
  .required('Required'),
  lastName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  organization: Yup.string()
      .min(2,'Too short!')
      .max(50,'Too Long!')
      .required('Required'),
  email: Yup.string()
    .min('2','small')
    .required('Required'),
  phoneNumber : Yup.string()
    .min(10,'small')
    .max(20,'Long')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});



 function UsernameInput() {

    return (
        // <FormControl fullWidth >
        //     <h1 className='create' >Create your account</h1>
        //   <label shrink htmlFor="bootstrap-input" className='label' >
        //   First name
        //   </label>
        //   <BootstrapInput  id="username"  placeholder='First name' defaultValue="Gobinthiran"/>

        //   <br/>
        //   <label shrink htmlFor="bootstrap-input" className='label'>
        //   Last name
        //   </label>
        //   <BootstrapInput  id="password" placeholder='Typed text' defaultValue="Kulendran"/>
        
        //   <br/>
        //   <label shrink htmlFor="bootstrap-input" className='label'>
        //   Organization
        //   </label>
        //   <BootstrapInput  id="username"  placeholder='Place holder' defaultValue="Aatral Organization"/>

        //   <br/>
        //   <label shrink htmlFor="bootstrap-input" className='label'>
        //   Email
        //   </label>
        //   <BootstrapInput  id="password" placeholder='Typed text' defaultValue="gobinthiran@huex.studio" />
        //   <br/>
        //   <label shrink htmlFor="bootstrap-input" className='label'>
        //   Phone number
        //   </label>
        //   <BootstrapInput  id="username"  placeholder='Enter your phone number' />
        //   <br/>
        //   <label shrink htmlFor="bootstrap-input" className='label'>
        //     Password
        //   </label>
        //   <BootstrapInput  id="password" placeholder='Typed text' />  
        // </FormControl>
        <FormControl fullWidth >
        <Formik
            initialValues={{
            firstName: '',
            lastName:'',
            organization:'',
            email: '',
            phoneNumber:'',
            password: '',
           
      }}
      validationSchema={UserNameSchema}
      onSubmit={values => {
          // same shape as initial // values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>   
          {/* <label htmlFor="">username</label> <br/> */}
            <Field name="firstName"  label= 'firstName' fullWidth as={TextField}
             error={errors.firstName} helperText={errors.firstName}/>
           <br/> <br/>

          <Field name="lastName"  label= 'lastName' fullWidth as={TextField}
             error={errors.lastName} helperText={errors.lastName}/>
                  
          <Field name="organization"  label= 'Organization' fullWidth as={TextField}
             error={errors.organization} helperText={errors.organization}/>
                  
          <Field name="email"  label= 'Email' type="email" fullWidth as={TextField}
             error={errors.email} helperText={errors.email}/>
                  
          <Field name="phoneNumber"  label= 'PhoneNumber' fullWidth as={TextField}
             error={errors.phoneNumber} helperText={errors.phoneNumber}/>
                  
            {/* <label htmlFor="">Password</label> <br/> */}
          <Field name="password" label= 'Password' fullWidth as={TextField} type='password'
          error ={errors.password} helperText={errors.password}/>    
             <br/>
        </Form>
      )}
    </Formik>  
   </FormControl> 
    );
  }

  export default UsernameInput
