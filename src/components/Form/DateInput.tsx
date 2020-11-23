import React, { useEffect, useState, useMemo, ReactNode } from 'react';
import CustomInput from 'components/CustomInput/CustomInput';
import InputAdornment from '@material-ui/core/InputAdornment';

interface IInputProps {
  id: string;
  label: string;
  inputType?: string;
  value: string;
  onChange: Function;
  isValid?: boolean;
  loadError?: boolean;
  disabled?: boolean;
  endAdornmentIcon?: ReactNode;
}

const DateInput = ({
  id,
  label,
  inputType = 'date',
  value,
  onChange,
  isValid = true,
  loadError = false,
  disabled = false,
  endAdornmentIcon,
}: IInputProps) => {
  const handleOnChange = e => {
    onChange({ id: e.target.id, value: e.target.value });
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
        placeholder: '',
        endAdornment: <InputAdornment position="end">{endAdornmentIcon}</InputAdornment>,
        onChange: handleOnChange,
      }}
    />
  );
};

export default DateInput;
