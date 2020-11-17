import React, { useEffect, useMemo, useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import { verifyEmail } from './validators';

const EmailInput = ({ id, label, value, isRequired, onChange, endAdornmentIcon, hasError = false }: any) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();
  const message = useMemo(() => {
    if (isEmpty || hasError) {
      return 'Campo requerido';
    }
    return '';
  }, [hasError, isEmpty]);

  useEffect(() => {
    if (value !== '') {
      setIsEmpty(false);
      setIsValidEmail(verifyEmail(value));
      setFirstLoad(false);
    }
    if (hasError) {
      setFirstLoad(false);
    }
    setErrorMessage(message);
  }, [hasError, message, value]);

  const handleOnChange = e => {
    onChange({ id: e.target.id, value: e.target.value, isValid: verifyEmail(e.target.value) });
  };

  const handlerOnBlur = e => {
    if (isRequired) {
      setIsEmpty(e.target.value.trim().length <= 0);
    }
    setFirstLoad(false);
  };

  return (
    <CustomInput
      success={isValidEmail && !isEmpty}
      error={(!isValidEmail || isEmpty) && hasError && !firstLoad}
      labelText="Email"
      id={id}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        value,
        type: 'email',
        onBlur: handlerOnBlur,
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
