export interface ILender {
  cuit: number; // puede repertise?
  lenderName: string;
  personType: string;
  name: string;
  lastName: string;
  businessName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  cellphone: number;
  phone: number;
  economicActivity: IEconomicActivity;
  address: IAddress;
}

export interface IEconomicActivity {
  type: string;
  order: string;
  registrationPeriod: string;
}
export interface IAddress {
  streetAdress: string;
  floor: string;
  aptNumber: string;
  department: string;
  location: string;
  province: string;
  postalCode: string;
  observations: string;
}

export interface ILegalPersonType {
  statuteStatutoryReform: string;
  cuitCertificate: string;
  proofGrossIncome: string;
  lastBalanceCertificate: string;
  proofLegalPerson: string;
  proofOfInscriptionUIF: string;
  originLegalityFundsCertificate: string;
  currentAuthoritiesCertificate: string;
  ActOfAssemblyCurrentauthorities: string;
  ActOfGoverningBody: string;
  currentAuthoritiesDNICertificates: string;
  pepAuthoritiesCertificate: string;
  regulatoryComplianceUIFCertificate: string;
  uifInscriptionCertificate: string;
  meetingMinutesOfficialDesignation: string;
  actPLAFT: string;
  manualCopyPLAFT: string;
}

export interface IHumanPersonType {
  cuitCertificate: string;
  proofGrossIncome: string;
  incomesCertificates: string;
  dniCertificate: string;
  proofOfInscriptionUIF: string;
  originLegalityFundsCertificate: string;
  pepAuthoritiesCertificate: string;
  uidInscriptionCertificateAsLender: string;
  manualCopyPLAFT: string;
}
