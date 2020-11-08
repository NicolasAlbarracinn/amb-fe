import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import { verifyEmail } from './validators';
import { IInputProps } from './types';

const EmailInput = ({ id, label, value, isRequired, onChange, endAdornmentIcon }: IInputProps) => {
  const [isValidEmail, setIsValidEmail] = useState(true);

  const handleOnChange = e => {
    setIsValidEmail(verifyEmail(e.target.value));
    onChange({ id: e.target.id, value: e.target.value });
  };

  return (
    <CustomInput
      success={isValidEmail || isRequired}
      error={!isValidEmail && isRequired}
      labelText={isRequired ? 'Email *' : 'Email'}
      helperText={!isValidEmail ? 'Formato invalido' : ''}
      id={id}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        value,
        type: 'email',
        endAdornment: (
          <InputAdornment position="end" style={{ color: '#555' }}>
            {endAdornmentIcon}
          </InputAdornment>
        ),
        onChange: handleOnChange,
      }}
    />
  );
};

export default EmailInput;
