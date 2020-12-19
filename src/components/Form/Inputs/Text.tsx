import React from 'react';

import CustomInput from './CustomInput';
import { verifyLength } from '../validators';

import { useInputValidation } from '../useInputValidation';
import { IInputProps, InputEventFunction } from '../types';

type ITextInput = {} & IInputProps;

const TextInput = ({
  id,
  label,
  updateValueOnBlur,
  formHasBeenSubmited = true,
  isValidInput = true,
  disabled = false,
}: ITextInput) => {
  const { invalidInput, hasBeenValidAtLeastOnce, eventsHandlers } = useInputValidation(
    formHasBeenSubmited,
    isValidInput,
    updateValueOnBlur,
  );

  const { onChangeValidation, onInputFocused, OnBlurValidation } = eventsHandlers;

  const handleOnChange: InputEventFunction = ({ currentTarget: { value } }) => {
    const isValid = verifyLength(value, [3, 5]);
    onChangeValidation(isValid);
  };

  const handleOnFocus: InputEventFunction = () => {
    onInputFocused();
  };

  const handleOnBlur: InputEventFunction = ({ currentTarget: { value, id } }) => {
    const isValid = verifyLength(value, [3, 5]);
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
        disabled,
        onChange: handleOnChange,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      }}
    />
  );
};

export default TextInput;
