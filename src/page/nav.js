import React, { Component } from 'react';
import { Button, ThemeProvider, Typography, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import theme from '../theme/theme';
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
 
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       flexGrow: 1,
//     },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }),
// );

class Nav extends Component {
    state = {}
    render() {
        // const classes = useStyles();
        return (
            <ThemeProvider theme={theme} >
            <Router>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                        </IconButton>
                        <Typography variant="h6" color="secoundry"  >
                            Logo
                        </Typography>
                        <div style={{}}>
                        <Link to="/home" style={{ textDecoration: 'none' }} color="#ffffff">  <Button color="secoundry"> Home</Button></Link>
                        <Link to="/about" style={{ textDecoration: 'none' }}>  <Button color="secoundry">About</Button></Link>
                        </div>
                        <div>
                        <Link to="/signup" style={{ textDecoration: 'none' }}> <Button  color="secoundry">SignUp</Button></Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}>  <Button color="secoundry">Login</Button></Link>
                        </div>
                        
                    </Toolbar>
                    
                </AppBar>
                <Switch>
                          <Route exact path="/home">
                            <Home />         
                         </Route>
                         <Route exact path="/about">
                            <About/>         
                         </Route>
                         <Route exact path="/signup">
                            <Signup/>         
                         </Route>
                         <Route exact path="/login">
                            <Login/>         
                         </Route>
                </Switch>
                   </Router> 
            </ThemeProvider>
        );
    }
}

function Home() {
    return (
      <div>
        <h2 >Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>This is about</h2>
      </div>
    );
  }

  function Signup() {
    return (
      <div>
        <h2>This is signup</h2>
      </div>
    );
  }

  function Login() {
    return (
      <div>
        <h2>This is Login</h2>
      </div>
    );
  }

export default Nav;
