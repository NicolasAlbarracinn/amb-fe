import React from 'react';
// import classNames from 'classnames';
import { FieldProps, getIn } from 'formik';
import { TextField } from '@material-ui/core';

import { useStyles } from '../CustomInput/styles';

const TextFormField: React.FC<FieldProps> = ({ field, form, ...props }) => {
  const classes = useStyles();

  const errorText = getIn(form.touched, field.name) && getIn(form.errors, field.name);

  return (
    <TextField
      fullWidth
      margin="normal"
      helperText={errorText}
      error={!!errorText}
      {...field}
      {...props}
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
    />
  );
};

export default TextFormField;
