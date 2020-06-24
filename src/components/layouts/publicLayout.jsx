import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(( theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(19),
      textAlign: 'center',
      color: theme.palette.secoundry,
      alignItems:'center'
    },
    para:{
      font: 'Regular 15px/19px PT Sans',
      letterSpacing:' 0px',
      color:' #181D33',
      opacity: '0.48'
    }
  }),
);

function PublicLayout(props) {
    const classes = useStyles(props);

    return (
        <Grid xs={12} container >  
            <Grid item xs={6} className={classes.paper} style={{width:'100vh' , height:'100vh', alignItems:'center'}}  >
              <img src={props.logo} alt="noda" />  
              <h1> {props.header} </h1>
              <p className={classes.para} >{props.para} </p>
            </Grid>
            <Grid item xs={6} style={{border:' 0.25px solid #EDEDED'}} justify='center'>
              {props.children} 
            </Grid>
        </Grid> 
           ) 
}

export default PublicLayout;