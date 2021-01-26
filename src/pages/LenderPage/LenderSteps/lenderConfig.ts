import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

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

export const lenderConfig = (
  inputValue: {
    [key: string]: DefaultState;
  },
  updateValueOnBlur: UpdateInput,
  formHasBeenSubmited,
) => {
  return [
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'lenderName',
        label: 'Nombre del fondista en el sistema',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['lenderName'].isValid,
        value: inputValue['lenderName'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'personType',
        label: 'Tipo de persona',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['personType'].isValid,
        value: inputValue['personType'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'name',
        label: 'Nombre',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['name'].isValid,
        value: inputValue['name'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'lastName',
        label: 'Apellido',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['lastName'].isValid,
        value: inputValue['lastName'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'businessName',
        label: 'Razon social',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['businessName'].isValid,
        value: inputValue['businessName'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'documentType',
        label: 'Tipo de documento',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['documentType'].isValid,
        value: inputValue['documentType'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'documentNumber',
        label: 'Numero de documento',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['documentNumber'].isValid,
        value: inputValue['documentNumber'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'email',
        label: 'E-mail',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['email'].isValid,
        value: inputValue['email'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'cellphone',
        label: 'Celular',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['cellphone'].isValid,
        value: inputValue['cellphone'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'phone',
        label: 'Telefono',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['phone'].isValid,
        value: inputValue['phone'].value,
      },
    },
  ];
};

export const economicActivityConfig = (
  inputValue: {
    [key: string]: DefaultState;
  },
  updateValueOnBlur: UpdateInput,
  formHasBeenSubmited,
) => {
  return [
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'type',
        label: 'Actividad ecònomica',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['type'].isValid,
        value: inputValue['type'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'order',
        label: 'Orden de la actividad',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['order'].isValid,
        value: inputValue['order'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'registrationPeriod',
        label: 'Periodo de alta de la actividad',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['registrationPeriod'].isValid,
        value: inputValue['registrationPeriod'].value,
      },
    },
  ];
};

export const addressConfig = (
  inputValue: {
    [key: string]: DefaultState;
  },
  updateValueOnBlur: UpdateInput,
  formHasBeenSubmited,
) => {
  return [
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'streetAdress',
        label: 'Calle y N°',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['streetAdress'].isValid,
        value: inputValue['streetAdress'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'floor',
        label: 'Calle y N°',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['floor'].isValid,
        value: inputValue['floor'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'aptNumber',
        label: 'Depto',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['aptNumber'].isValid,
        value: inputValue['aptNumber'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'department',
        label: 'Departamento',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['department'].isValid,
        value: inputValue['department'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'location',
        label: 'Localidad',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['location'].isValid,
        value: inputValue['location'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'province',
        label: 'Provincia',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['province'].isValid,
        value: inputValue['province'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'postalCode',
        label: 'Código postal',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['postalCode'].isValid,
        value: inputValue['postalCode'].value,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'observations',
        label: 'Observaciones',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['observations'].isValid,
        value: inputValue['observations'].value,
      },
    },
  ];
};
