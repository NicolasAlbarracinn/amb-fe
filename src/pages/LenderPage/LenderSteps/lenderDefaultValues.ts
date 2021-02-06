import { DefaultState } from 'containers/WizardContainer/hooks';

export const lenderDefaultState = {
  cuit: {
    value: '',
    isValid: true,
  }, // puede repertise?
  lenderName: {
    value: '',
    isValid: true,
  },
  personType: {
    value: '',
    isValid: true,
  },
  name: {
    value: '',
    isValid: true,
  },
  lastName: {
    value: '',
    isValid: true,
  },
  businessName: {
    value: '',
    isValid: true,
  },
  documentType: {
    value: '',
    isValid: true,
  },
  documentNumber: {
    value: '',
    isValid: true,
  },
  email: {
    value: '',
    isValid: true,
  },
  cellphone: {
    value: '',
    isValid: true,
  },
  phone: {
    value: '',
    isValid: true,
  },
};

export const addressDefaultState = {
  streetAdress: {
    value: '',
    isValid: false,
  },
  floor: {
    value: '',
    isValid: false,
  },
  aptNumber: {
    value: '',
    isValid: false,
  },
  department: {
    value: '',
    isValid: false,
  },
  location: {
    value: '',
    isValid: false,
  },
  province: {
    value: '',
    isValid: false,
  },
  postalCode: {
    value: '',
    isValid: false,
  },
  observations: {
    value: '',
    isValid: false,
  },
};

export const economicActivityState = {
  type: {
    value: '',
    isValid: false,
  },
  order: {
    value: '',
    isValid: false,
  },
  registrationPeriod: {
    value: '',
    isValid: false,
  },
};

export const humanPersonState = {
  cuitCertificate: {
    value: '',
    isValid: false,
  },
  proofGrossIncome: {
    value: '',
    isValid: false,
  },
  incomesCertificates: {
    value: '',
    isValid: false,
  },
  dniCertificate: {
    value: '',
    isValid: false,
  },
  proofOfInscriptionUIF: {
    value: '',
    isValid: false,
  },
  originLegalityFundsCertificate: {
    value: '',
    isValid: false,
  },
  pepAuthoritiesCertificate: {
    value: '',
    isValid: false,
  },
  uidInscriptionCertificateAsLender: {
    value: '',
    isValid: false,
  },
  manualCopyPLAFT: {
    value: '',
    isValid: false,
  },
};

export const legalPersonState = {
  statuteStatutoryReform: {
    value: '',
    isValid: false,
  },
  cuitCertificate: {
    value: '',
    isValid: false,
  },
  proofGrossIncome: {
    value: '',
    isValid: false,
  },
  lastBalanceCertificate: {
    value: '',
    isValid: false,
  },
  proofLegalPerson: {
    value: '',
    isValid: false,
  },
  proofOfInscriptionUIF: {
    value: '',
    isValid: false,
  },
  originLegalityFundsCertificate: {
    value: '',
    isValid: false,
  },
  currentAuthoritiesCertificate: {
    value: '',
    isValid: false,
  },
  ActOfAssemblyCurrentauthorities: {
    value: '',
    isValid: false,
  },
  ActOfGoverningBody: {
    value: '',
    isValid: false,
  },
  currentAuthoritiesDNICertificates: {
    value: '',
    isValid: false,
  },
  pepAuthoritiesCertificate: {
    value: '',
    isValid: false,
  },
  regulatoryComplianceUIFCertificate: {
    value: '',
    isValid: false,
  },
  uifInscriptionCertificate: {
    value: '',
    isValid: false,
  },
  meetingMinutesOfficialDesignation: {
    value: '',
    isValid: false,
  },
  actPLAFT: {
    value: '',
    isValid: false,
  },
  manualCopyPLAFT: {
    value: '',
    isValid: false,
  },
};

type genericObject = { [key: string]: DefaultState };

export interface ILegalPersonType extends genericObject {
  statuteStatutoryReform: DefaultState;
  cuitCertificate: DefaultState;
  proofGrossIncome: DefaultState;
  lastBalanceCertificate: DefaultState;
  proofLegalPerson: DefaultState;
  proofOfInscriptionUIF: DefaultState;
  originLegalityFundsCertificate: DefaultState;
  currentAuthoritiesCertificate: DefaultState;
  ActOfAssemblyCurrentauthorities: DefaultState;
  ActOfGoverningBody: DefaultState;
  currentAuthoritiesDNICertificates: DefaultState;
  pepAuthoritiesCertificate: DefaultState;
  regulatoryComplianceUIFCertificate: DefaultState;
  uifInscriptionCertificate: DefaultState;
  meetingMinutesOfficialDesignation: DefaultState;
  actPLAFT: DefaultState;
  manualCopyPLAFT: DefaultState;
}

export interface IHumanPersonType extends genericObject {
  cuitCertificate: DefaultState;
  proofGrossIncome: DefaultState;
  incomesCertificates: DefaultState;
  dniCertificate: DefaultState;
  proofOfInscriptionUIF: DefaultState;
  originLegalityFundsCertificate: DefaultState;
  pepAuthoritiesCertificate: DefaultState;
  uidInscriptionCertificateAsLender: DefaultState;
  manualCopyPLAFT: DefaultState;
}
