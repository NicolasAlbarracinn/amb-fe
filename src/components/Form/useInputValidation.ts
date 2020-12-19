import { useEffect, useState } from 'react';

import { UpdateInput } from './types';

export const useInputValidation = (
  formHasBeenSubmited: boolean,
  isValidInput: boolean,
  updateValueOnBlur: UpdateInput,
) => {
  const [invalidInput, setInvalidInput] = useState(false);
  const [hasBeenValidAtLeastOnce, setHasBeenValidAtLeastOnce] = useState(false);

  useEffect(() => {
    if (formHasBeenSubmited) {
      setHasBeenValidAtLeastOnce(true);
      setInvalidInput(!isValidInput);
    }
  }, [formHasBeenSubmited, isValidInput]);

  const onChangeValidation = (isValid: boolean) => {
    setInvalidInput(!isValid);
    if (isValid) {
      setHasBeenValidAtLeastOnce(true);
    }
  };

  const onInputFocused = () => {
    setHasBeenValidAtLeastOnce(false);
  };

  const OnBlurValidation = (currentTarget: { value: string; id: string; isValid: boolean }) => {
    const { isValid, id, value } = currentTarget;

    setInvalidInput(!isValid);
    setHasBeenValidAtLeastOnce(true);
    updateValueOnBlur({ [id]: { value, isValid } });
  };

  const eventsHandlers = {
    onChangeValidation,
    onInputFocused,
    OnBlurValidation,
  };

  return { invalidInput, hasBeenValidAtLeastOnce, setInvalidInput, setHasBeenValidAtLeastOnce, eventsHandlers };
};
