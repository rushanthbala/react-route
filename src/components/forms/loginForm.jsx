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

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required')
});

export  function CustomizedInputs() {
  return (
      <FormControl fullWidth >
        <Formik
            initialValues={{
            firstName: '',
            password: '',
            email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={values => {
          // same shape as initial // values
        console.log(values);
      }}
    >
      {({ errors, touched }) => (
        <Form>   
          <label htmlFor="">username</label> <br/>
          <Field name="firstName"  label= 'username' fullWidth as={TextField} error={errors.firstName} helperText={errors.firstName}/>
          {errors.firstName && touched.firstName ? (
            <div></div>
          ) : null}  <br/> <br/>
         <label htmlFor="">Password</label> <br/>
          <Field name="password" label= 'Password' fullWidth as={TextField} type='password'
          error ={errors.password} helperText={errors.password}/>
          {errors.password && touched.password ? (
            <div></div>
          ) : null} <br/>
        </Form>
      )}
    </Formik>  
   </FormControl>    
  );
}
export default CustomizedInputs;
