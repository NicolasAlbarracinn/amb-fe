import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

export const liquidationsConfig = (
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
        id: 'cutDay',
        label: 'dia De Corte Haberes',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['cutDay'].isValid || true,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'fixedChargeDebtCommission',
        label: 'Comision Por Debito Cargo Fijo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['fixedChargeDebtCommission'].isValid || true,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'fixedChargeDebtCommissionPercent',
        label: 'comision por debito cargo porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['fixedChargeDebtCommissionPercent'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'percentCreditTax',
        label: 'impuestos Débitos Créditos Porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['percentCreditTax'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'percentBankingExpenses',
        label: 'gastos Bancarios Porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['percentBankingExpenses'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'typeOfCalculation',
        label: 'tipode Calculo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['typeOfCalculation'].isValid,
      },
    },
  ];
};
