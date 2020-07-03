import React from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputButton from '../core/InputButton';
import input from '../core/Input';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formCart: {
    maxWidth: '430px',
    width: '100%',
  },
});

function DateAndTimePickers(props) {
  const { classes } = props;

  return (
    <form className={classes.formCart}>
      <Grid container item xs={12} sm={12} md={12} lg={12}>
        <input
          id="date-picker-inline"
          label="Enter date and time"
          type="datetime-local"
          placeholder="enter date and time"
          className={classes.textField}
          InputLabelProps={{
            shrink: false,
          }}
        />
      </Grid>
      <InputButton color="primary">Count days</InputButton>
    </form>
  );
}

DateAndTimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateAndTimePickers);