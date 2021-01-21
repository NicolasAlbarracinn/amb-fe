import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

export const bankLiquidationConfigForm = (
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
        id: 'diaCorteBancario',
        label: 'dia de corte bancario',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['diaCorteBancario'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'comisionDebitoCargoFijo',
        label: 'comisiondDebito de cargo fijo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['comisionDebitoCargoFijo'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'comisionDebitoCargoPorcentaje',
        label: 'comision debito cargo porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['comisionDebitoCargoPorcentaje'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'impuestosDebitosCreditosPorcentaje',
        label: 'impuestos Débitos Créditos Porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['impuestosDebitosCreditosPorcentaje'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'gastosBancariosPorcentaje',
        label: 'gastos Bancarios Porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['gastosBancariosPorcentaje'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'tipodeCalculo',
        label: 'tipode Calculo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['tipodeCalculo'].isValid,
      },
    },
  ];
};
