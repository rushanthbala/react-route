import React from "react";
 import { withStyles } from "@material-ui/core/styles";
 import Button from '@material-ui/core/Button';

 const styles = () => ({
  
 });
 const InputButton = ({
   classes,
   ...rest
 }) => {
   return (
       <Button
         fullWidth='True'
         variant="contained"
         type={'submit'}
         {...rest}
       />
   );
 };
 export default withStyles(styles)(InputButton);