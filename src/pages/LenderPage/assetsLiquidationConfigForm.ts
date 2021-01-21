import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

export const assetsLiquidationConfigForm = (
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
        id: 'diaDeCorteHaberes',
        label: 'diaDeCorteHaberes',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['diaDeCorteHaberes'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'ComisionporDebitoCargoFijo',
        label: 'Comision Por Debito Cargo Fijo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['ComisionporDebitoCargoFijo'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'ComisionporDebitoCargoPorcentaje',
        label: 'comision por debito cargo porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['ComisionporDebitoCargoPorcentaje'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'impuestosDébitosCréditosPorcentajeHaberes',
        label: 'impuestos Débitos Créditos Porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['impuestosDébitosCréditosPorcentajeHaberes'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'gastosBancariosPorcentajeHaberes',
        label: 'gastos Bancarios Porcentaje',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['gastosBancariosPorcentajeHaberes'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'tipodeCalculoHaberes',
        label: 'tipode Calculo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['tipodeCalculoHaberes'].isValid,
      },
    },
  ];
};
