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
        label: 'tipo de cartera',
        handleSelect: updateValueOnBlur,
        isValid: inputValue['portfolioTypes'].isValid,
        items: [
          { value: 'Sin fines determinados', label: 'Sin fines determinados' },
          { value: 'Ayudas economicas', label: 'Ayudas economicas' },
          { value: 'Vacaciones', label: 'Vacaciones' },
        ],
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
        value: inputValue['minCapital'].value,
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
        value: inputValue['minDues'].value,
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
        value: inputValue['administrativeExpense'].value,
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
        value: inputValue['monthlyCashRate'].value,
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
        value: inputValue['financialTotal'].value,
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
        value: inputValue['validSince'].value,
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
        value: inputValue['validTo'].value,
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
        value: inputValue['showsAmountAwarded'].value,
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
        value: inputValue['description'].value,
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
        value: inputValue['maxCapital'].value,
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
        value: inputValue['maxDues'].value,
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
        value: inputValue['cancellationExpense'].value,
      },
    },
  ];
};
