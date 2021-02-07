import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

export interface QueryParameters {
  sortBy?: {
    field: string;
    value: string;
  };
  limit?: number;
  offset?: number;
  filter?: string;
}

export interface IConfig {
  type: InputOptions;
  gridSizeProps: { xs: number; sm: number };
  props: object;
}

export type IConfigFunction = (
  inputValue: {
    [key: string]: DefaultState;
  },
  updateValueOnBlur: UpdateInput,
  formHasBeenSubmited: boolean,
) => Array<IConfig>;
