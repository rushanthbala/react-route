import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Formik, Form } from "formik";
import * as Yup from "yup";

const useStyles = makeStyles((theme) =>
  createStyles({
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
    },
  })
);

const SignupSchema = Yup.object().shape({
  firstName:Yup.string()
    .min(6, " 11Too Short!")
    .max(50, "Too Long!"),
  lastName:Yup.string()
    .min(6, "222Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    organization :Yup.string()
    .min(6, "333Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(6, "444Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phoneNumber:Yup.string()
    .min(6, "555Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const UsernameInput = (props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        firstName:"",
        lastName:"",
        organization:"",
        password: "",
        phoneNumber:"",
        email:"",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched,setFieldTouched }) => (
        <Form className={classes.formCart}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              fullWidth
              id='firstName'
              name="firstName"
              label="First name"
              variant="outlined"
              error={Boolean(errors.firstName) && touched.firstName}
              onBlur={() => setFieldTouched('firstName')}
              helperText={errors.firstName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="lastName"
              name="lastName"
              label="Last name"
              variant="outlined"
              error={errors.lastName && touched.lastName}
              // onBlur={() => setFieldTouched('lastName')}
            // onBlur={()=> lastname==errors.lastName ? }
              helperText={errors.lastName}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="organization"
              name="organization"
              label="Organization"
              variant="outlined"
              error={Boolean(errors.organization) && touched.organization}
              onBlur={() => setFieldTouched('organization')}
              helperText={errors.organization}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="password"
              name="password"
              label="password"
              variant="outlined"
              error={Boolean(errors.password) && touched.password}
              onBlur={() => setFieldTouched('password')}
              helperText={errors.password}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="phoneNumber"
              name="phoneNumber"
              label="Phone number"
              variant="outlined"
              error={Boolean(errors.phoneNumber) && touched.phoneNumber}
              onBlur={() => setFieldTouched('phoneNumber')}
              helperText={errors.phoneNumber}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              variant="outlined"
              error={Boolean(errors.email) && touched.email}
              onBlur={() => setFieldTouched('email')}
              helperText={errors.email}
            />
          </Grid>
          

          {/*<Field name="email" type="email" fullWidth*/}
          {/*variant="outlined"/>*/}
          {/*{errors.email && touched.email ? <div>{errors.email}</div> : null}*/}
         
        </Form>
      )}
    </Formik>
  );
};
export default UsernameInput;