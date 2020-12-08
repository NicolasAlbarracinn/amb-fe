import React, { useEffect, useState, ReactNode } from 'react';
import classNames from 'classnames';

import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import { InputBaseComponentProps } from '@material-ui/core/InputBase';
import { verifyLength } from './validators';

import { useInputStyles } from './useInputStyles';

import { DefaultState } from 'containers/WizardContainer/hooks';

type InputEventFunction = (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

interface IInputProps {
  id: string;
  labelText: string;
  helperText?: string;
  length?: number[];
  formControlProps?: FormControlProps;
  inputProps?: InputBaseComponentProps;
  labelProps?: InputLabelProps;
  updateValueOnBlur: (inputValue: { [key: string]: DefaultState }) => void;
  formHasBeenSubmited?: boolean;
  isValidInput: boolean;
}

const InputText = ({
  id,
  labelText,
  length = [3, 5],
  helperText,
  formControlProps,
  inputProps,
  labelProps,
  updateValueOnBlur,
  formHasBeenSubmited,
  isValidInput,
}: IInputProps) => {
  const [invalidInput, setInvalidInput] = useState(false);
  const [hasBeenValidAtLeastOnce, setHasBeenValidAtLeastOnce] = useState(false);

  const { marginTop, formControlClasses, helpTextClasses, inputClasses, classes } = useInputStyles(invalidInput);

  useEffect(() => {
    if (formHasBeenSubmited) {
      setHasBeenValidAtLeastOnce(true);
      setInvalidInput(!isValidInput);
    }
  }, [formHasBeenSubmited, isValidInput]);

  const handleOnChange: InputEventFunction = ({ currentTarget: { value } }) => {
    const isValid = verifyLength(value, length);

    setInvalidInput(!isValid);

    if (isValid) {
      setHasBeenValidAtLeastOnce(true);
    }
  };

  const handleOnFocus: InputEventFunction = () => {
    setHasBeenValidAtLeastOnce(false);
  };

  const handleOnBlur: InputEventFunction = ({ currentTarget: { value, id } }) => {
    const isValid = verifyLength(value, length);

    setInvalidInput(!isValid);
    setHasBeenValidAtLeastOnce(true);
    updateValueOnBlur({ [id]: { value, isValid } });
  };

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
        inputProps={{ ...inputProps, onChange: handleOnChange, onFocus: handleOnFocus, onBlur: handleOnBlur }}
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

export default InputText;
