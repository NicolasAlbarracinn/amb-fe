import React from 'react';

import CustomInput from './CustomInput';
import { verifyEmail } from '../validators';

import { useInputValidation } from '../useInputValidation';
import { IInputProps, InputEventFunction } from '../types';

type IEmailInput = {} & IInputProps;

const EmailInput = ({
  id,
  label,
  updateValueOnBlur,
  formHasBeenSubmited = true,
  isValidInput = true,
  disabled = false,
}: IEmailInput) => {
  const { invalidInput, hasBeenValidAtLeastOnce, eventsHandlers } = useInputValidation(
    formHasBeenSubmited,
    isValidInput,
    updateValueOnBlur,
  );

  const { onChangeValidation, onInputFocused, OnBlurValidation } = eventsHandlers;

  const handleOnChange: InputEventFunction = ({ currentTarget: { value } }) => {
    const isValid = verifyEmail(value);
    onChangeValidation(isValid);
  };

  const handleOnFocus: InputEventFunction = () => {
    onInputFocused();
  };

  const handleOnBlur: InputEventFunction = ({ currentTarget: { value, id } }) => {
    const isValid = verifyEmail(value);
    OnBlurValidation({ value, id, isValid });
  };

  return (
    <CustomInput
      id={id}
      labelText={label}
      invalidInput={invalidInput}
      hasBeenValidAtLeastOnce={hasBeenValidAtLeastOnce}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        type: 'email',
        disabled,
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      }}
    />
  );
};

export default EmailInput;
