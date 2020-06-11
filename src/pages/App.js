import React, { Component } from 'react';
import publicRoutes from '../routes/publicroutes';
// import Grid from '@material-ui/core/Grid';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";


class App extends Component {
    publicRoute =(route,index)=>{
        console.log(route);
        
        return(
            <Route
                key={index}
                path={route.path}
                component={route.component}
                extact={route.extact}
                    />)                   
    }
    render() { 
        return ( 
            <Router>
                <Switch>
                    {publicRoutes.map((route,index)=>this.publicRoute(route,index))}
                    
                </Switch>
            </Router>
            
         );
         
    }
}
 

export default App;
