import React from 'react';
import classNames from 'classnames';

import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';

import { useInputStyles } from '../useInputStyles';

interface ICustomInputProps {
  id: string;
  labelText: string;
  invalidInput: boolean;
  hasBeenValidAtLeastOnce: boolean;
  helperText?: string;
  formControlProps?: FormControlProps;
  inputProps?: InputBaseComponentProps;
  labelProps?: InputLabelProps;
}

const CustomInput = ({
  id,
  labelText,
  helperText,
  formControlProps,
  inputProps,
  labelProps,
  invalidInput,
  hasBeenValidAtLeastOnce,
}: ICustomInputProps) => {
  const { marginTop, formControlClasses, helpTextClasses, inputClasses, classes } = useInputStyles(invalidInput);

  //TODO: move this to useInputStyles hook
  const inputUnderline = !hasBeenValidAtLeastOnce
    ? ''
    : !invalidInput && hasBeenValidAtLeastOnce
    ? classes.underlineSuccess
    : classes.underlineError;
  //TODO: move this to useInputStyles hook
  const labelStyle = !hasBeenValidAtLeastOnce
    ? ''
    : !invalidInput && hasBeenValidAtLeastOnce
    ? classes.labelRootSuccess
    : classes.labelRootError;

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {!!labelText && (
        <InputLabel className={classes.labelRoot + ' ' + labelStyle} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      )}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: classNames([classes.underline, inputUnderline]),
        }}
        id={id}
        inputProps={{ ...inputProps }}
        rowsMax={3}
      />
      {!!helperText && (
        <FormHelperText id={id + '-text'} className={helpTextClasses}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CustomInput;
