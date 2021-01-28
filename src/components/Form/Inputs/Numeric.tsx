import React, { useEffect, useState } from 'react';

import CustomInput from './CustomInput';
import { verifyLength } from '../validators';

import { useInputValidation } from '../useInputValidation';
import { IInputProps, InputEventFunction } from '../types';

type INumericInput = {
  min?: number;
  max?: number;
  length?: Array<number>;
  isDecimal?: boolean;
} & IInputProps;

type IValidateNumber = (arg: number, validationsArgs?: { min: number; max: number }) => boolean;

const validateNumber: IValidateNumber = (value, validationsArgs) => {
  if (!validationsArgs) return true;
  const { max, min } = validationsArgs;
  const isValidNumber = value >= min && value <= max;

  return isValidNumber;
};

const NumericInput = ({
  id,
  label,
  updateValueOnBlur,
  formHasBeenSubmited = true,
  isValidInput = true,
  disabled = false,
  value,
  length = [0, Number.MAX_SAFE_INTEGER.toString().length],
  max = Number.MAX_SAFE_INTEGER,
  min = 0,
  isDecimal,
}: INumericInput) => {
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

  const handleChangeDecimal: InputEventFunction = ({ currentTarget: { value } }) => {
    const alreadyHasComa = value.replace(/[^.]/g, '').length > 1;

    if (alreadyHasComa) return;

    if (value.split('')[value.length - 1] === '.') {
      setInputValue(value);
      return;
    }

    const numericValue = Number(value);

    if (isNaN(numericValue)) return;

    const isValid = validateNumber(numericValue, { max, min });
    onChangeValidation(isValid);
    setInputValue(numericValue.toString());
  };

  const handleChange: InputEventFunction = ({ currentTarget: { value } }) => {
    const numericValue = Number(value);

    if (isNaN(numericValue)) return;

    const isValid = validateNumber(numericValue, { max, min });
    const isValidLength = verifyLength(numericValue.toString(), length);
    onChangeValidation(isValid && isValidLength);
    setInputValue(numericValue.toString());
  };

  const handleOnFocus: InputEventFunction = () => {
    onInputFocused();
  };

  const handleOnBlur: InputEventFunction = ({ currentTarget: { value, id } }) => {
    const isValid = validateNumber(Number(value), { max, min });
    const isValidLength = verifyLength(value, length);
    OnBlurValidation({ value, id, isValid: isValid && isValidLength });
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
        onChange: isDecimal ? handleChangeDecimal : handleChange,
        onFocus: handleOnFocus,
        onBlur: handleOnBlur,
      }}
    />
  );
};

export default NumericInput;
