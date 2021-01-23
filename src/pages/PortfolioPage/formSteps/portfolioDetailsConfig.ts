import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

export const portfolioDetailsConfig = (
  inputValue: {
    [key: string]: DefaultState;
  },
  updateValueOnBlur: UpdateInput,
  formHasBeenSubmited,
) => {
  return [
    {
      type: InputOptions.SELECT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'portfolioTypes',
        label: 'portfolioTypes',
        handleSelect: updateValueOnBlur,
        formHasBeenSubmited,
        isValid: inputValue['portfolioTypes'].isValid,
        value: inputValue['portfolioTypes'].value,
        items: ['Sin fines determinados', 'Ayudas economicas', 'Vacaciones'],
        mainSelectLabel: 'Selecione el tipo de Cartera',
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'minCapital',
        label: 'minCapital',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['minCapital'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'minDues',
        label: 'minimo de cuotas',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['minDues'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'administrativeExpense',
        label: 'Gasto administrativo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['administrativeExpense'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'monthlyCashRate',
        label: 'Tasa de Effectivo mensual',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['monthlyCashRate'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'financialTotal',
        label: 'Costo finaciero total',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['financialTotal'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'validSince',
        label: 'Vigencia Desde',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['validSince'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'validTo',
        label: 'vigencia Hasta',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['validTo'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'showsAmountAwarded',
        label: 'Muestra monto ortogado',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['showsAmountAwarded'].isValid,
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
        id: 'description',
        label: 'descripcion Breve',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['description'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'maxCapital',
        label: 'capital Maximo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['maxCapital'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'maxDues',
        label: 'descripcion Breve',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['maxDues'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'cancellationExpense',
        label: 'gasto de cancelacion',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['cancellationExpense'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'fondista',
        label: 'fondista',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['lender'].isValid,
      },
    },
  ];
};
