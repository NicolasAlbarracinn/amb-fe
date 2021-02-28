import React from 'react';
import { FieldProps, getIn } from 'formik';
// import classNames from 'classnames';

import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';

import MomentUtils from '@date-io/moment';
import moment from 'moment';

import { useStyles } from '../CustomInput/styles';

const DateFormField: React.FC<
  FieldProps & {
    format?: string;
    minDate?: string;
    maxDate?: string;
    value: string;
    onChange: (date: MaterialUiPickersDate) => void;
  }
> = ({ field, form, format, maxDate, minDate, value, onChange, ...props }) => {
  const classes = useStyles();
  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <MuiPickersUtilsProvider libInstance={moment} locale="es" utils={MomentUtils}>
      <KeyboardDatePicker
        helperText={errorText}
        error={!!errorText}
        {...field}
        {...props}
        disableToolbar
        variant="inline"
        margin="none"
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
        format="DD/MM/YYYY"
        InputLabelProps={{
          classes: {
            root: classes.labelRoot,
            error: classes.labelRootError,
          },
        }}
        InputProps={{
          classes: {
            root: classes.input,
            underline: classes.underline,
            formControl: classes.formControl,
          },
        }}
        value={value}
        onChange={date => onChange(date)}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DateFormField;
