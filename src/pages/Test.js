import React, { Component } from 'react';
// import {push}  from 'lodash';
import InputButton from '../components/core/InputButton';
import InputField from '../components/core/Input';
import Grid from '@material-ui/core/Grid';

class UserNameVadidate extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            UserEmails:['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio'],
            Input:'',
         }
    }
    myChangeHandler = (event) => {
        this.setState({username: event.target.value});
      }
    render() { 
      const Handle =(e)=>{

          if (true) {
            alert('hi')
            this.setState({
                Input: e.target.value,
                UserEmails:[...this.state.UserEmails,this.state.username],
              })
          }
      
      }
        return ( 
            <div>
                <Grid container item xs={12} sm={12} md={12} lg={12}>
                    <InputField
                    onChange={this.myChangeHandler}
                    id={'email'}
                    name={'email'}
                    type={'email'}
                    label={'Email address'}
                    placeholder={'Enter email address'}
                    // error={Boolean() && }
                    // errorMessage={'enter the email'}
                    value={this.state.Input}
                    // getValue={(vaule) => formik.setFieldValue('email', vaule)}
                    // onBlur={() => formik.setFieldTouched('email')}                    
                    />
                </Grid>
                    {this.state.username}
                 <InputButton color='primary' onClick={Handle} >
                    Sign In
                </InputButton>
                 {/* {push(UserEmails,'welcome')} */}
                 {this.state.UserEmails}   
                 {this.state.Input}        
            </div>
         );
    }
}
 
export default UserNameVadidate;