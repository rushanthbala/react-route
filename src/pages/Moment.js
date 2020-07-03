import React, { Component } from 'react';
// import moment from 'moment'
import moment from 'moment';
import DateAndTimePickers from '../components/forms/MomentTest';

class Moment extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render(props) { 
        return ( 
            <div>
                {console.log( moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm"))}
                    {/* anu             { moment("2010-10-20 4:30",       "YYYY-MM-DD HH:mm")} */}
            </div>
         );
    }
}

export default Moment;