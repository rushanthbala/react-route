import React, { Component } from 'react';
import _  from 'lodash';
import LoginForm from '../components/forms/LoginForm';

class UserNameVadidate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
     const  UserNamesEmails = ['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio']
     var useremail =this.props.email
        return ( 
            <div>
                 {/* {_.push(UserNamesEmails,'welcome')} */}
                 {UserNamesEmails.push('rushanth9999@gmail.com')}
                 {UserNamesEmails}
            {console.log(this.props.email)}
            {console.log(this.props.values)}
           
            </div>
         );
    }
}
 
export default UserNameVadidate;
console.log('hi');