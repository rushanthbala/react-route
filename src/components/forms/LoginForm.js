import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import InputField from '../core/InputFeild'

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
  password: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const LoginForm = (props) => {
  const classes = useStyles();

  return (
    <Formik
      initialValues={{
        password: "",
        email: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ errors, touched,setFieldTouched }) => (
        <Form className={classes.formCart}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <InputField
              fullWidth
              id={"email"}
              name={"email"}
              label={'email'}
              variant={"outlined"}
              error={errors.email && touched.email}
              onBlur={() => setFieldTouched('email')}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            <InputField
              fullWidth
              id="password"
              name="password"
              label="Password"
              variant="outlined"
              error={Boolean(errors.password) && touched.password}
              onBlur={() => setFieldTouched('password')}
              helperText={errors.password}
            />  
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
export default LoginForm;