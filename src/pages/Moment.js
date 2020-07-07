import React, { Component } from 'react';
import moment from 'moment';
import MaterialUIPickers from '../components/forms/MomentTest';
class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    this.countRemain();
  }
  countRemain(){
    const dateB = moment('2019-11-11');
    const dateC = moment('2019-10-11');
    console.log(`Difference is ${dateB.diff(dateC)} milliseconds`);
    console.log(`Difference is ${dateB.diff(dateC, 'days')} day(s)`);
    console.log(`Difference is ${dateB.diff(dateC, 'weeks')} week(s)`);
    console.log(`Difference is ${dateB.diff(dateC, 'months')} month(s)`);
  };
  render() {
    const {  } = this.props;
    return (
      <div>
        <MaterialUIPickers/>
      </div>
    );
  }
}
export default Moment;