import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker } from "@material-ui/pickers";
import { IconButton, Button} from "@material-ui/core";
import MoreIcon from "@material-ui/icons/MoreVert";
import InputButton from "../core/InputButton";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export default function MaterialUIPickers() {
  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedDate2, setSelectedDate2] = React.useState(new Date());
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleDateChange2 = (date) => {
    setSelectedDate2(date);
  };
  const calculate =() => {
    console.log(
     ' Difference is ${moment(selectedDate).diff(moment{selectedDate2),unitOfTime:days)============'
    );
  };
return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
       <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate}
          onChange={handleDateChange}
         />
         <DateTimePicker
          label="DateTimePicker"
          inputVariant="outlined"
          value={selectedDate2}
          onChange={handleDateChange2}
         />
       <InputButton color="primary" onClick="calculate">
         Calculate interval
       </InputButton>
      </Grid>
    </MuiPickersUtilsProvider>
  );
}