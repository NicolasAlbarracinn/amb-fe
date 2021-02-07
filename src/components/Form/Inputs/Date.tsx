import React from 'react';
import classNames from 'classnames';

import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

import MomentUtils from '@date-io/moment';
import moment from 'moment';

import { useStyles } from '../../CustomInput/styles';

interface ICustomDateInput {
  id: string;
  formControlProps?: FormControlProps;
  label?: string;
  value: string;
  onChange: Function;
  isValid?: boolean;
  loadError?: boolean;
  disabled?: boolean;
}

const DateInput = ({
  id,
  label,
  value,
  onChange,
  isValid,
  loadError,
  disabled = false,
  formControlProps = {
    fullWidth: true,
  },
}: ICustomDateInput) => {
  const classes = useStyles();

  const handleDateChange = date => {
    const parsedDate = moment(date).format('MM/DD/YYYY');
    onChange({ [id]: { value: parsedDate, isValid: true } });
  };

  const error = !isValid && loadError;

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: isValid && !error,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: isValid && !error,
    [classes.underline]: true,
  });

  const formControlClasses = !!formControlProps
    ? classNames(formControlProps.className, classes.formControl)
    : classes.formControl;

  return (
    <MuiPickersUtilsProvider libInstance={moment} locale="es" utils={MomentUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="DD/MM/YYYY"
        margin="none"
        id={id}
        label={label}
        InputLabelProps={{ className: classes.labelRoot + ' ' + labelClasses }}
        value={value.length <= 0 ? null : moment(value).format('MM/DD/YYYY')}
        onChange={handleDateChange}
        maxDate={moment(new Date())}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        InputProps={{
          classes: {
            input: classes.input,
            disabled: classes.disabled,
            underline: underlineClasses,
            formControl: formControlClasses,
          },
        }}
        disabled={disabled}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateInput;
