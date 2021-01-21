import { InputOptions } from 'components/Form/Inputs';
import { UpdateInput } from 'components/Form/types';
import { DefaultState } from 'containers/WizardContainer/hooks';

export const LenderFormInputsConfig = (
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
        id: 'cartera',
        label: 'Cartera',
        handleSelect: updateValueOnBlur,
        formHasBeenSubmited,
        isValid: inputValue['cartera'].isValid,
        value: inputValue['cartera'].value,
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
        id: 'NDeIdentificacióndelPlan',
        label: 'Nro de indentificacion del plan',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['NDeIdentificacióndelPlan'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'capitalMinimo',
        label: 'Capital Minimo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['capitalMinimo'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'minimoDeCuotas',
        label: 'minimo de cuotas',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['minimoDeCuotas'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'gastoAdministrativo',
        label: 'Gasto administrativo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['gastoAdministrativo'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'tasaEffectivoMensual',
        label: 'Tasa de Effectivo mensual',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['tasaEffectivoMensual'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'constoFinancieroTotal',
        label: 'Costo finaciero total',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['constoFinancieroTotal'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'vigenciaDesde',
        label: 'Vigencia Desde',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['vigenciaDesde'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'vigenciaHasta',
        label: 'vigencia Hasta',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['vigenciaHasta'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'muestraMontoOtorgado',
        label: 'Muestra monto ortogado',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['muestraMontoOtorgado'].isValid,
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
        id: 'descripcionBreve',
        label: 'descripcion Breve',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['descripcionBreve'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'capitalMaximo',
        label: 'capital Maximo',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['capitalMaximo'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'descripcionBreve',
        label: 'descripcion Breve',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['descripcionBreve'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'maximoCuotas',
        label: 'maximo Cuotas',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['maximoCuotas'].isValid,
      },
    },
    {
      type: InputOptions.TEXT,
      gridSizeProps: {
        xs: 12,
        sm: 3,
      },
      props: {
        id: 'gastoCancelacion',
        label: 'gasto de cancelacion',
        updateValueOnBlur,
        formHasBeenSubmited,
        isValidInput: inputValue['gastoCancelacion'].isValid,
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
        isValidInput: inputValue['fondista'].isValid,
      },
    },
  ];
};
