import React, { useEffect, useMemo, useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import CustomInput from 'components/CustomInput/CustomInput';
import { verifyEmail } from './validators';

const EmailInput = ({ id, label, value, isRequired, onChange, endAdornmentIcon, hasError }: any) => {
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const message = useMemo(() => {
    if (isEmpty || hasError) {
      return 'Campo requerido';
    }
    return '';
  }, [hasError, isEmpty]);

  useEffect(() => {
    setErrorMessage(message);
  }, [message]);

  const handleOnChange = e => {
    setIsValidEmail(verifyEmail(e.target.value));
    onChange({ id: e.target.id, value: e.target.value, isValid: verifyEmail(e.target.value) });
  };

  const handlerOnBlur = e => {
    if (isRequired) {
      setIsEmpty(e.target.value.trim().length <= 0);
    }
  };

  return (
    <CustomInput
      success={isValidEmail && !isEmpty}
      error={((!isValidEmail || isEmpty) && value.length !== 0) || hasError}
      labelText={isRequired ? 'Email *' : 'Email'}
      helperText={errorMessage}
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
