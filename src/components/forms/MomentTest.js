import React from 'react';
import Grid from '@material-ui/core/Grid';
import { DateTimePicker } from '@material-ui/pickers';
import InputButton from '../core/InputButton';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment';
export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const calculate = () => {
    console.log(
      `Difference is ${moment(selectedDate2).diff(
        moment(selectedDate),
        'days'
      )}`
    );
    // console.log('test is working ----------------', selectedDate , selectedDate2);
    // console.log(moment(selectedDate2).diff(moment(selectedDate), 'days'));
  };
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Grid container justify="space-around">
        <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
          format="DD/MM/YYYY HH:mm"
        />
        <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate2}
          onChange={handleDateChange2}
          format="DD/MM/YYYY HH:mm"
        />
        <InputButton color="primary" onClick={calculate}>
          Calculate interval
        </InputButton>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}