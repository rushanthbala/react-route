import React, { Component } from 'react';
import _ , { divide } from 'lodash';

class UserNameVadidate extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
     const  UserNamesEmails = ['zajith@huex.studio', 'gobi@huex.studio', 'chanthan@huex.studio']

        return ( 
            <div>
                {UserNamesEmails}
            </div>
         );
    }
}
 
export default UserNameVadidate;
console.log('hi');