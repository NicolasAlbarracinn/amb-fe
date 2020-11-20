import React, { useMemo, useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import { verifyEmail } from './validators';

const EmailInput = ({
  id,
  label,
  value,
  onChange,
  endAdornmentIcon,
  loadError = false,
  isValid = true,
  disabled = false,
}: any) => {
  const [errorMessage, setErrorMessage] = useState<string>();

  const message = useMemo(() => {
    if (isValid) {
      return 'Campo requerido';
    }
    return '';
  }, [isValid]);

  const handleOnChange = e => {
    onChange({ id: e.target.id, value: e.target.value, isValid: verifyEmail(e.target.value) });
  };

  return (
    <CustomInput
      success={isValid}
      error={!isValid && loadError}
      labelText="Email"
      id={id}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        disabled,
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
