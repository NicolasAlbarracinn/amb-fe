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
  hasErrors?: boolean;
}

const TextInput = ({
  id,
  label,
  value,
  length = [0, 25],
  isRequired,
  onChange,
  endAdornmentIcon,
  hasErrors,
}: IInputProps) => {
  const [isValidLength, setIsValidLength] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const message = useMemo(() => {
    if (isEmpty) {
      return 'Campo requerido';
    }
    if (value.length > length[1]) {
      return `Maximo ${length[1]} caracteres`;
    }
    return '';
  }, [isEmpty, length, value.length]);

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
      error={((!isValidLength || isEmpty) && value.length !== 0) || hasErrors}
      labelText={<span>{label}</span>}
      helperText={errorMessage}
      id={id}
      formControlProps={{
        fullWidth: true,
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
