import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { isEmpty } from 'lodash';

import { DefaultState, useInputChange } from 'containers/WizardContainer/hooks';
import { selectIsDataBeenFetched } from 'containers/Lender/selectors';

import { parseReceivedForm } from 'utils/parseForm';

import { IConfigFunction } from './LenderSteps/lenderConfig';

interface IGenericObject {
  [key: string]: DefaultState;
}

export const useLenderState = <T extends object>(
  fetchedData: T,
  defaultState: IGenericObject,
  configFunction: IConfigFunction,
) => {
  const [formHasBeenSubmited, setFormHasBeenSubmited] = useState(false);
  const { inputs, updateInputs } = useInputChange(defaultState);
  const config = configFunction(defaultState, updateInputs, formHasBeenSubmited);
  const [inputsConfig, setInputConfig] = useState(config);

  const fetched = useSelector(selectIsDataBeenFetched);

  useEffect(() => {
    if (!isEmpty(fetchedData)) {
      const updatedItems = parseReceivedForm(fetchedData);
      const inputyConfig = configFunction(updatedItems, updateInputs, formHasBeenSubmited);
      setInputConfig(inputyConfig);
      updateInputs(updatedItems);
    }
  }, [fetchedData, fetched]);

  return { inputs, inputsConfig, setFormHasBeenSubmited };
};
