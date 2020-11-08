import React from 'react';
// nodejs library to set properties for components
import classNames from 'classnames';
// @material-ui/core components
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import { useStyles } from './styles';

interface ICustomInput {
  formControlProps: FormControlProps;
  labelText?: string;
  id?: string;
  labelProps?: InputLabelProps;
  inputProps?: InputBaseComponentProps;
  error?: boolean;
  success?: boolean;
  white?: boolean;
  helperText?: string;
  inputRootCustomClasses?: string;
}

const CustomInput = ({
  formControlProps,
  labelText,
  id,
  labelProps,
  inputProps,
  error,
  white,
  success,
  helperText,
  inputRootCustomClasses,
}: ICustomInput) => {
  const classes = useStyles();

  const labelClasses = classNames({
    [' ' + classes.labelRootError]: error,
    [' ' + classes.labelRootSuccess]: success && !error,
  });

  const underlineClasses = classNames({
    [classes.underlineError]: error,
    [classes.underlineSuccess]: success && !error,
    [classes.underline]: true,
    [classes.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses!]: inputRootCustomClasses !== undefined,
  });

  const inputClasses = classNames({
    [classes.input]: true,
    [classes.whiteInput]: white,
  });

  const formControlClasses = !!formControlProps
    ? classNames(formControlProps.className, classes.formControl)
    : classes.formControl;

  const helpTextClasses = classNames({
    [classes.labelRootError]: error,
    [classes.labelRootSuccess]: success && !error,
  });

  return (
    <FormControl {...formControlProps} className={formControlClasses}>
      {!!labelText && (
        <InputLabel className={classes.labelRoot + ' ' + labelClasses} htmlFor={id} {...labelProps}>
          {labelText}
        </InputLabel>
      )}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: classes.disabled,
          underline: underlineClasses,
        }}
        id={id}
        inputProps={inputProps}
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
