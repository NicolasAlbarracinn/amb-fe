export const liquidationState = {
  cutDay: {
    value: '10',
    isValid: true,
  }, //Debe aparecer el número 10 pero con posibilidad de edición
  fixedChargeDebtCommission: {
    value: '0',
    isValid: true,
  }, //Debe aparecer el número 0 pero con posibilidad de edición
  fixedChargeDebtCommissionPercent: {
    value: '10',
    isValid: true,
  }, //Debe aparecer el número 10 pero con posibilidad de edición
  percentCreditTax: {
    value: '10',
    isValid: true,
  }, //Debe aparecer el número 10 pero con posibilidad de edición
  percentBankingExpenses: {
    value: '0',
    isValid: true,
  }, //Debe aparecer el número 0 pero con posibilidad de edición
  typeOfCalculation: {
    value: '',
    isValid: true,
  }, //Debe aparecer Por lo Enviado con posibilidad de edición
};

export const portfolioState = {
  portfolioTypes: {
    value: '',
    isValid: true,
  },
  planId: {
    value: '',
    isValid: true,
  }, //carga automatica al guardar cartera-generado por back
  description: {
    value: '',
    isValid: true,
  }, //20 caracteres maximo
  minCapital: {
    value: '',
    isValid: true,
  },
  minDues: {
    value: '',
    isValid: true,
  }, //Minimo debe ser 0
  administrativeExpense: {
    value: '',
    isValid: true,
  },
  monthlyCashRate: {
    value: '',
    isValid: true,
  }, // poner una descripcion T.E.M% | Minimo 0 y se expresa en %
  financialTotal: {
    value: '',
    isValid: true,
  }, //poner descripcion C.F.T% | Minimo 0 y se expresa en %
  validSince: {
    value: '',
    isValid: true,
  }, // es una fecha
  validTo: {
    value: '',
    isValid: true,
  }, //fecha
  showsAmountAwarded: {
    value: '',
    isValid: true,
  },
  maxCapital: {
    value: '',
    isValid: true,
  },
  maxDues: {
    value: '',
    isValid: true,
  },
  cancellationExpense: {
    value: '',
    isValid: true,
  },
  lender: {
    value: '',
    isValid: true,
  }, //va a depender de la lista de fondista-- en db agregar una realcion a lista de fondista
};
