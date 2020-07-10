import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import InputField from '../core/Input';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import InputButton from '../core/InputButton';
// import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) =>
  createStyles({
    formCart: {
      maxWidth: '430px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        maxWidth: '100%',
        '& > :nth-child(n+1)': {
          padding: '0 16px',
        },
      },
    },
  })
);

const LoginForm = (props) => {
  // const matches = useMediaQuery('(min-width:100px)');
  const classes = useStyles();
  const formik = useFormik({
    initialValues: {
      email: props.initialValues.email,
      password: props.initialValues.password,
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string()
        .min(6, 'minimum 6 characters')
        .required('Required'),
    }),
    onSubmit: (values) => {
      console.log(values)
      //  var title = this.title;
      // var inputValue = input.value;
    },
    handleClick: function() {
      if (this.refs.myInput !== null) {
          var input = this.refs.myInput;
              var inputValue = input.value;
        alert("Input is", inputValue);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12} >
        <InputField
        // ref={(c) => this.title = c}
          id={'email'}
          name={'email'}
          type={'email'}
          label={'Email address'}
          placeholder={'Enter email address'}
          error={Boolean(formik.errors.email) && formik.touched.email}
          errorMessage={formik.errors.email}
          value={formik.values.email}
          getValue={(vaule) => formik.setFieldValue('email', vaule)}
          onBlur={() => formik.setFieldTouched('email')}
          // onChange={{this.onSubmit}  }
        />
      </Grid>
      {/* <p> {this.formik.initialValues.email} </p> */}

      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <InputField
          id={'password'}
          name={'password'}
          type={'password'}
          label={'Password'}
          placeholder={'Enter password'}
          error={Boolean(formik.errors.password) && formik.touched.password}
          errorMessage={formik.errors.password}
          value={formik.values.password}
          fullWidth
          getValue={(vaule) => formik.setFieldValue('password', vaule)}
          onBlur={() => formik.setFieldTouched('password')}
        />
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <Box className={classes.forgotText}>
          Forgot password? <Link to={'/forgot-password'}>RESET</Link>
        </Box>
      </Grid>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
      <InputButton color='primary'>
        Sign In
      </InputButton>
      </Grid>
    </form>
  );
};

export default LoginForm;
