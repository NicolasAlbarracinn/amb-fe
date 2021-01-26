import React, { useEffect, useState } from 'react';

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
  value,
}: ITextInput) => {
  const [inputValue, setInputValue] = useState(value);
  const { invalidInput, hasBeenValidAtLeastOnce, eventsHandlers } = useInputValidation(
    formHasBeenSubmited,
    isValidInput,
    updateValueOnBlur,
  );

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const { onChangeValidation, onInputFocused, OnBlurValidation } = eventsHandlers;

  const handleOnChange: InputEventFunction = ({ currentTarget: { value } }) => {
    const isValid = verifyLength(value, [0, 80]);
    onChangeValidation(isValid);
    setInputValue(value);
  };

  const handleOnFocus: InputEventFunction = () => {
    onInputFocused();
  };

  const handleOnBlur: InputEventFunction = ({ currentTarget: { value, id } }) => {
    const isValid = verifyLength(value, [3, 80]);
    OnBlurValidation({ value, id, isValid });
  };

  return (
    <CustomInput
      key={id}
      id={id}
      value={inputValue}
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
