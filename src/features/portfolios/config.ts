export enum WizardStepsConfig {
  ASSETS_LIQUIDATION = 'assetsLiquidation',
  BANK_LIQUIDATION = 'bankLiquidation',
  PORTFOLIO_DETAILS = 'portfolioDetails',
  SHARE_INFO = 'ShareInfoStep',
}

export const defaultLiquidation = {
  cutDay: '',
  fixedChargeDebtCommission: '',
  fixedChargeDebtCommissionPercent: '',
  percentCreditTax: '',
  percentBankingExpenses: '',
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
