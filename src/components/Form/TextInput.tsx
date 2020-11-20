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
  isValid?: boolean;
  inputType?: string;
  loadError?: boolean;
  disabled?: boolean;
}

const TextInput = ({
  id,
  value,
  onChange,
  length = [0, 25],
  label,
  endAdornmentIcon,
  isValid = true,
  inputType = 'text',
  loadError = false,
  disabled = false,
}: IInputProps) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const message = useMemo(() => {
    if (isValid) {
      return 'Campo requerido';
    }
    if (value.length > length[1]) {
      return `Maximo ${length[1]} caracteres`;
    }
    return '';
  }, [isValid, length, value.length]);

  const handleOnChange = e => {
    onChange({ id: e.target.id, value: e.target.value, isValid: verifyLength(e.target.value, length) });
  };

  return (
    <CustomInput
      success={isValid}
      error={!isValid && loadError}
      labelText={<span>{label}</span>}
      id={id}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        disabled,
        value,
        type: inputType,
        endAdornment: <InputAdornment position="end">{endAdornmentIcon}</InputAdornment>,
        onChange: handleOnChange,
      }}
    />
  );
};

export default TextInput;
