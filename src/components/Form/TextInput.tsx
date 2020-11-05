import React, { useEffect, useState } from 'react';

import { InputAdornment, makeStyles } from '@material-ui/core';
import { Close } from '@material-ui/icons';

import CustomInput from 'components/CustomInput/CustomInput';
import { dangerColor } from 'utils/styles';

const styles = {
  danger: {
    color: dangerColor[0] + '!important',
  },
};

const useStyles = makeStyles(styles);

const TextInput = ({ isRequired, handler, id, length, labelText }) => {
  const [lengthState, setLengthState] = useState(false);
  const [value, setValue] = useState(false);

  const classes = useStyles();

  const verifyLength = (value, length) => {
    if (value.length >= length[0] && value.length <= length[1]) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (lengthState || !isRequired) {
      handler({ id, value });
    }
  }, [handler, id, isRequired, lengthState, value]);

  const handleOnChange = e => {
    if (verifyLength(e.target.value, length)) {
      setLengthState(true);
    } else {
      setLengthState(false);
    }
    setValue(e.target.value);
  };

  return (
    <CustomInput
      success={lengthState || isRequired}
      error={!lengthState && isRequired}
      labelText={labelText}
      id={id}
      formControlProps={{
        fullWidth: true,
      }}
      inputProps={{
        onChange: e => handleOnChange(e),
        type: 'text',
        endAdornment: !lengthState ? (
          <InputAdornment position="end">
            <Close className={classes.danger} />
          </InputAdornment>
        ) : undefined,
      }}
    />
  );
};

export default TextInput;
