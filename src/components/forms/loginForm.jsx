import {
    createStyles,
    Theme,
    withStyles,
    makeStyles
  } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import React, { Component } from 'react';
import {Button} from '@material-ui/core';
import { Grid } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
        margin:'100px'
      },
    },
    forgotText: {
      fontSize: "14px",
      letterSpacing: "0",
      fontWeight: 400,
      color: "#4E598348",
      paddingBottom: "16px",
    },
    apiError: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ff1744",
      fontSize: "14px",
    },
    formCart: {
      maxWidth: '430px',
      width: '100%',
    },
    Field: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin:' 10px 10px'
    },
    label:{
      color:'red',
      margin:'200px'
    }
  })
);


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
  const classes = useStyles();
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
        <Form className={classes.root}>   
         
          <Field className={classes.Field} name="firstName"  label= 'username' fullWidth as={TextField}
           variant='outlined'
           error={errors.firstName && touched.firstName} helperText={errors.firstName  }  />
          {errors.firstName && touched.firstName ? (
            <div></div>
          ) : null} 
         
          <Field className={classes.Field} name="password" label= 'Password' fullWidth as={TextField}
           type='password'  variant='outlined'
          // onBlur='()=> {
          //   setOpen(false);
          // }'
          error ={errors.password && touched.password } helperText={errors.password}/>
          {errors.password && touched.password ? (
            <div></div>
          ) : null} 
        </Form>
      )}
    </Formik>  
   </FormControl>    
  );
}
export default CustomizedInputs;
