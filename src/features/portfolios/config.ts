import * as yup from 'yup';

export enum WizardStepsConfig {
  ASSETS_LIQUIDATION = 'assetsLiquidation',
  BANK_LIQUIDATION = 'bankLiquidation',
  PORTFOLIO_DETAILS = 'portfolioDetails',
  SHARE_INFO = 'ShareInfoStep',
}

export const defaultLiquidationBank = {
  cutDay: '10',
  fixedChargeDebtCommission: '0',
  fixedChargeDebtCommissionPercent: '0',
  percentCreditTax: '0',
  percentBankingExpenses: '0',
  typeOfCalculation: '',
};

export const defaultLiquidationAssets = {
  cutDay: '17',
  fixedChargeDebtCommission: '2.3',
  fixedChargeDebtCommissionPercent: '2.3',
  percentCreditTax: '0.75',
  percentBankingExpenses: '0',
  typeOfCalculation: '',
};

export const defaultDetails = {
  portfolioTypes: '',
  minCapital: '',
  minDues: '',
  administrativeExpense: '',
  monthlyCashRate: '',
  nominalAnulRate: '',
  anualCashRate: '',
  financialTotal: '',
  validSince: null,
  validTo: null,
  showsAmountAwarded: '',
  description: '',
  maxCapital: '',
  maxDues: '',
  cancellationExpense: '',
};

export const defaultShare = {
  plan: '',
  amountGranted: '',
  signatureAmount: '',
  duesQuantity: '',
  duesAmount: '',
};

export const formPlanSchema = yup.object().shape({
  plan: yup.string().required('campo requerido'),
  amountGranted: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  signatureAmount: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  duesAmount: yup.number().positive().typeError('Debe ser un campo nummerico'),
});

export const formDetailSchema = yup.object().shape({
  portfolioTypes: yup.string().required('campo requerido'),
  minCapital: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  minDues: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  administrativeExpense: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  monthlyCashRate: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  nominalAnulRate: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  anualCashRate: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  financialTotal: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  validSince: yup.date().nullable().required('campo requerido'),
  validTo: yup.date().nullable().required('campo requerido'),
  showsAmountAwarded: yup.string().required('campo requerido'),
  description: yup.string().required('campo requerido'),
  maxCapital: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  maxDues: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
  cancellationExpense: yup.number().positive().typeError('Debe ser un campo nummerico').required('campo requerido'),
});

export const formLiquidationSchema = yup.object().shape({
  cutDay: yup.number().typeError('Debe ser un campo nummerico').min(0, 'debe ser positivo').required('campo requerido'),
  fixedChargeDebtCommission: yup
    .number()
    .typeError('Debe ser un campo nummerico')
    .min(0, 'debe ser positivo')
    .required('campo requerido'),
  fixedChargeDebtCommissionPercent: yup
    .number()
    .typeError('Debe ser un campo nummerico')
    .min(0, 'debe ser positivo')
    .required('campo requerido'),
  percentCreditTax: yup
    .number()
    .typeError('Debe ser un campo nummerico')
    .min(0, 'debe ser positivo')
    .required('campo requerido'),
  percentBankingExpenses: yup
    .number()
    .typeError('Debe ser un campo nummerico')
    .min(0, 'debe ser positivo')
    .required('campo requerido'),
  typeOfCalculation: yup.string().required('campo requerido'),
});
