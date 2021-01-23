import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

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
        id: 'cuit',
        label: 'cuit',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['cuit'].isValid,
      },
    },
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
        type: 'number',
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
      },
    },
  ];
};
