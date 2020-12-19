import React from 'react';
import GridItem from 'components/Grid/GridItem';

import InputText from './Text';
import InputDate from './Date';
import InputSelect from './Select';
import InputEmail from './Email';

export enum InputOptions {
  TEXT = 'text',
  NUMERIC = 'number',
  SELECT = 'select',
  DATE = 'date',
  EMAIL = 'email',
}

export const inputCases = {
  [InputOptions.TEXT]: InputText,
  [InputOptions.EMAIL]: InputEmail,
  [InputOptions.DATE]: InputDate,
  [InputOptions.SELECT]: InputSelect,
};

const FormInputs = (inputs: Array<any>) => {
  return inputs.map(input => {
    const Input = inputCases[input.type];

    return (
      <GridItem {...input.gridSizeProps}>
        <Input {...input.props} />
      </GridItem>
    );
  });
};

export default FormInputs;
