export interface ILender {
  lenderInfo: {
    cartera: 'Sin fines determinados' | 'Ayudas economicas' | 'Vacaciones';
    NDeIdentificacióndelPlan: number; //carga automatica al guardar cartera-generado por back
    descripcion: string;
    capitalMinimo: number;
    minimoDeCuotas: number; //Minimo debe ser 0
    gastoAdministrativo: number;
    tasaEffectivoMensual: number; // poner una descripcion T.E.M% | Minimo 0 y se expresa en %
    constoFinancieroTotal: number; //poner descripcion C.F.T% | Minimo 0 y se expresa en %
    vigenciaDesde: string; // es una fecha
    vigenciaHasta: string; //fecha
    muestraMontoOtorgado: 'si' | 'no';
    descripcionBreve: string; //20 caracteres maximo
    capitalMaximo: number; //Minimo debe ser 0
    maximoCuotas: number; // maximo 120;
    gastoCancelacion: number;
    fondista: '9 de Mayo' | 'SAEM' | 'HUGER' | 'DAP' | 'MEFIN'; //va a depender de la lista de fondista-- en db agregar una realcion a lista de fondista
  };
  //-------tab Datos para la Liquidación Bancaria------
  //TOOO: usar ILiquidation interface
  bankLiquidation: {
    diaCorteBancario: number; // Debe aparecer el número 17 pero con posibilidad de edición
    comisionDebitoCargoFijo: number; //Debe aparecer 2,3 pero con posibilidad de edición
    comisionDebitoCargoPorcentaje: number; //Debe aparecer 1%, pero con posibilidad de edición
    impuestosDebitosCreditosPorcentaje: number; // Debe aparecer 0,75% pero con posibilidad de edición
    gastosBancariosPorcentaje: number; //Debe aparecer 0% pero con posibilidad de edición
    tipodeCalculo: 'Por lo enviado' | 'Por lo debitado'; // Debe aparecer Por lo Debitado con posibilidad de edición
  };
  //-------tab Datos para la Liquidación de Haberes-------
  //TOOO: usar ILiquidation interface
  assetsLiquidation: {
    diaDeCorteHaberes: number; //Debe aparecer el número 10 pero con posibilidad de edición
    ComisionporDebitoCargoFijo: number; //Debe aparecer el número 0 pero con posibilidad de edición
    ComisionporDebitoCargoPorcentaje: number; //Debe aparecer el número 10 pero con posibilidad de edición
    impuestosDébitosCréditosPorcentajeHaberes: number; //Debe aparecer el número 10 pero con posibilidad de edición
    gastosBancariosPorcentajeHaberes: number; //Debe aparecer el número 0 pero con posibilidad de edición
    tipodeCalculoHaberes: 'Por lo enviado' | 'Por lo debitado'; //Debe aparecer Por lo Enviado con posibilidad de edición
  };
}

export interface ILiquidation {
  diaDeCorteHaberes: number; //Debe aparecer el número 10 pero con posibilidad de edición
  ComisionporDebitoCargoFijo: number; //Debe aparecer el número 0 pero con posibilidad de edición
  ComisionporDebitoCargoPorcentaje: number; //Debe aparecer el número 10 pero con posibilidad de edición
  impuestosDébitosCréditosPorcentajeHaberes: number; //Debe aparecer el número 10 pero con posibilidad de edición
  gastosBancariosPorcentajeHaberes: number; //Debe aparecer el número 0 pero con posibilidad de edición
  tipodeCalculoHaberes: 'Por lo enviado' | 'Por lo debitado'; //Debe aparecer Por lo Enviado con posibilidad de edición
}
