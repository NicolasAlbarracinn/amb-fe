import React, { useEffect, useState, useMemo, ReactNode } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import { verifyLength } from './validators';

interface IInputProps {
  id: string;
  label: string;
  value: string;
  isRequired: boolean;
  onChange: Function;
  length?: number[];
  endAdornmentIcon?: ReactNode;
  hasError?: boolean;
  inputType?: string;
}

const TextInput = ({
  id,
  label,
  value,
  length = [0, 25],
  isRequired,
  onChange,
  endAdornmentIcon,
  hasError,
  inputType = 'text',
}: IInputProps) => {
  const [isValidLength, setIsValidLength] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const message = useMemo(() => {
    if (isEmpty || hasError) {
      return 'Campo requerido';
    }
    if (value.length > length[1]) {
      return `Maximo ${length[1]} caracteres`;
    }
    return '';
  }, [hasError, isEmpty, length, value.length]);

  useEffect(() => {
    setErrorMessage(message);
  }, [message]);

  const handleOnChange = e => {
    const isValid = verifyLength(e.target.value, length);
    setIsValidLength(isValid);
    onChange({ id: e.target.id, value: e.target.value, isValid });
  };

  const handlerOnBlur = e => {
    if (isRequired) {
      setIsEmpty(e.target.value.trim().length <= 0);
    }
  };

  return (
    <CustomInput
      success={isValidLength && !isEmpty}
      error={((!isValidLength || isEmpty) && value.length !== 0) || hasError}
      labelText={<span>{label}</span>}
      helperText={errorMessage}
      id={id}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        value,
        type: inputType,
        endAdornment: <InputAdornment position="end">{endAdornmentIcon}</InputAdornment>,
        onChange: handleOnChange,
        onBlur: handlerOnBlur,
      }}
    />
  );
};

export default TextInput;
