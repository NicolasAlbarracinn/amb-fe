import CustomInput from 'components/CustomInput/CustomInput';
import React, { useEffect, useState } from 'react';

const EmailInput = ({ isRequired, emailHandler }) => {
  const [registerEmail, setregisterEmail] = useState('');
  const [registerEmailState, setregisterEmailState] = useState(false);

  const verifyEmail = value => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (registerEmailState || !isRequired) {
      emailHandler({ id: 'email', value: registerEmail });
    }
  }, [emailHandler, isRequired, registerEmail, registerEmailState]);

  const handleOnChange = e => {
    if (verifyEmail(e.target.value)) {
      setregisterEmailState(true);
    } else {
      setregisterEmailState(false);
    }
    setregisterEmail(e.target.value);
  };

  return (
    <CustomInput
      success={registerEmailState || isRequired}
      error={!registerEmailState && isRequired}
      labelText={isRequired ? 'Email *' : 'Email'}
      id="registeremail"
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        onChange: e => handleOnChange(e),
        type: 'email',
      }}
    />
  );
};

export default EmailInput;
