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
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'cutDay',
        label: 'Día de Corte Haberes',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['cutDay'].isValid,
        value: inputValue['cutDay'].value,
      },
    },
    {
      type: InputOptions.NUMERIC,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'fixedChargeDebtCommission',
        label: 'Comision Por Debito Cargo Fijo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['fixedChargeDebtCommission'].isValid,
        value: inputValue['fixedChargeDebtCommission'].value,
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
        id: 'fixedChargeDebtCommissionPercent',
        label: 'Comisión por Debito Cargo %',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['fixedChargeDebtCommissionPercent'].isValid,
        value: inputValue['fixedChargeDebtCommission'].value,
        isDecimal: true,
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
        id: 'percentCreditTax',
        label: 'Impuestos Débitos/Créditos %',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['percentCreditTax'].isValid,
        value: inputValue['percentCreditTax'].value,
        isDecimal: true,
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
        id: 'percentBankingExpenses',
        label: 'Gastos Bancarios %',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['percentBankingExpenses'].isValid,
        value: inputValue['percentBankingExpenses'].value,
        isDecimal: true,
        max: 100,
      },
    },
    {
      type: InputOptions.SELECT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'typeOfCalculation',
        label: 'Tipo de Cálculo',
        handleSelect: updateValueOnBlur,
        isValid: inputValue['typeOfCalculation'].isValid,
        items: [
          { value: 'Por lo enviado', label: 'Por lo enviado' },
          { value: 'Por lo debitado', label: 'Por lo debitado' },
        ],
      },
    },
  ];
};
