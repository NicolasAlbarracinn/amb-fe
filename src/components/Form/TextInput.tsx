import React, { useEffect, useState, useMemo } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import { verifyLength } from './validators';
import { IInputProps } from './types';

const TextInput = ({ id, label, value, length = [0, 25], isRequired, onChange, endAdornmentIcon }: IInputProps) => {
  const [isValidLength, setIsValidLength] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const message = useMemo(() => (isEmpty ? 'Campo Requerido' : !isValidLength ? `maximo de ${length[1]}` : undefined), [
    isEmpty,
    isValidLength,
    length,
  ]);

  useEffect(() => {
    setErrorMessage(message);
  }, [message]);

  const handleOnChange = e => {
    setIsValidLength(verifyLength(e.target.value, length));
    onChange({ id: e.target.id, value: e.target.value });
  };

  const handlerOnBlur = e => {
    if (isRequired) {
      setIsEmpty(e.target.value.trim().length <= 0);
    }
  };

  return (
    <CustomInput
      success={isValidLength || isRequired}
      error={!isValidLength || isEmpty}
      labelText={label}
      helperText={errorMessage}
      id={id}
      formControlProps={{
        fullWidth: true,
        required: isRequired,
      }}
      inputProps={{
        value,
        type: 'text',
        endAdornment: <InputAdornment position="end">{endAdornmentIcon}</InputAdornment>,
        onChange: handleOnChange,
        onBlur: handlerOnBlur,
      }}
    />
  );
};

export default TextInput;
