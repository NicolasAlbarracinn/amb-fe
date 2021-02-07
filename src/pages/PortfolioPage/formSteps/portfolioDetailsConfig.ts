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
      type: InputOptions.NUMERIC,
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
        isDecimal: true,
      },
    },
    {
      type: InputOptions.NUMERIC,
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
      type: InputOptions.NUMERIC,
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
        isDecimal: true,
      },
    },
    {
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'monthlyCashRate',
        label: 'Tasa Efectiva Mensual - T.E.M %',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['monthlyCashRate'].isValid,
        value: inputValue['monthlyCashRate'].value,
        max: 100,
      },
    },
    {
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'nominalAnulRate',
        label: 'Tasa Nominal Anual - T.N.A%',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['nominalAnulRate'].isValid,
        value: inputValue['nominalAnulRate'].value,
        max: 100,
      },
    },
    {
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'anualCashRate',
        label: 'Tasa Efectiva Anual - T.E.A%',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['anualCashRate'].isValid,
        value: inputValue['anualCashRate'].value,
        max: 100,
      },
    },
    {
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'financialTotal',
        label: 'Costo Financiero Total - C.F.T %',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['financialTotal'].isValid,
        value: inputValue['financialTotal'].value,
        max: 100,
      },
    },
    {
      //TODO: modify input date
      type: InputOptions.DATE,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'validSince',
        label: 'Vigencia Desde',
        onChange: updateValueOnBlur,
        isValid: inputValue['validSince'].isValid,
        value: inputValue['validSince'].value,
        loadError: false,
      },
    },
    {
      //TODO: modify input date
      type: InputOptions.DATE,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'validTo',
        label: 'Vigencia Hasta',
        onChange: updateValueOnBlur,
        isValid: inputValue['validTo'].isValid,
        value: inputValue['validTo'].value,
        loadError: false,
      },
    },
    {
      type: InputOptions.SELECT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'showsAmountAwarded',
        label: 'Muestra monto ortogado',
        handleSelect: updateValueOnBlur,
        isValid: inputValue['showsAmountAwarded'].isValid,
        items: [
          { value: 'si', label: 'Si' },
          { value: 'no', label: 'No' },
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
        id: 'description',
        label: 'descripcion Breve',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['description'].isValid,
        value: inputValue['description'].value,
      },
    },
    {
      type: InputOptions.NUMERIC,
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
        isDecimal: true,
      },
    },
    {
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'maxDues',
        label: 'maximo de cuotas',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['maxDues'].isValid,
        value: inputValue['maxDues'].value,
        max: 120,
      },
    },
    {
      type: InputOptions.NUMERIC,
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
        isDecimal: true,
      },
    },
  ];
};
