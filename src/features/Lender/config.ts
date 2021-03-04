import * as yup from 'yup';

export enum WizardStepsConfig {
  LENDER_STEP = 'lenderDetails',
  ECONOMIC_STEP = 'economicActivity',
  ADDRESS_STEP = 'address',
  FILES_STEP = 'ledersFileUpdates',
}

export const Defaultlender = {
  cuit: '',
  lenderName: '',
  personType: '',
  name: '',
  lastName: '',
  businessName: '',
  documentType: '',
  documentNumber: '',
  email: '',
  cellphone: '',
  phone: '',
};

export const defaultEconomic = {
  type: '',
  order: '',
  registrationPeriod: '',
};

export const defaultAddress = {
  streetAdress: '',
  floor: '',
  aptNumber: '',
  department: '',
  location: '',
  province: '',
  postalCode: '',
  observations: '',
};

export const formLenderSchema = yup.object().shape({
  cuit: yup.string().required('campo requerido').length(11, 'formato incorrecto'),
  lenderName: yup.string().required('campo requerido'),
  personType: yup.string().required('campo requerido'),
  name: yup.string().required('campo requerido'),
  lastName: yup.string().required('campo requerido'),
  businessName: yup.string().required('campo requerido'),
  documentType: yup.string().required('campo requerido'),
  documentNumber: yup.string().required('campo requerido').length(8, 'formato incorrecto'),
  email: yup.string().required('campo requerido').email('formato incorrecto'),
  cellphone: yup.string().required('campo requerido'),
  phone: yup.string().required('campo requerido'),
});

export const formEconomicSchema = yup.object().shape({
  type: yup.string().required('campo requerido'),
  order: yup.string().required('campo requerido'),
  registrationPeriod: yup.string().required('campo requerido'),
});

export const formAddressSchema = yup.object().shape({
  streetAdress: yup.string().required('campo requerido'),
  floor: yup.string().required('campo requerido'),
  aptNumber: yup.string().required('campo requerido'),
  department: yup.string().required('campo requerido'),
  location: yup.string().required('campo requerido'),
  province: yup.string().required('campo requerido'),
  postalCode: yup.string().required('campo requerido'),
  observations: yup.string().notRequired(),
});

type updateField = (args: { value: string; id: string; isValid: boolean }) => void;

export const humanPersonFiles = (updateValueOnBlur: updateField) => [
  {
    id: 'cuitCertificate',
    title: 'Constancia de CUIT',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'proofGrossIncome',
    title: 'Constancia de Ingresos Brutos',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'incomesCertificates',
    title: 'Certificaciòn de ingresos y/o ùltima DDJJ de ganancias y/o DDJJ bienes personales',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'dniCertificate',
    title: 'DNI',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'proofOfInscriptionUIF',
    title: 'Constancia de inscripción UIF Persona Humana (De corresponder)',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'originLegalityFundsCertificate',
    title: 'DDJJ Origen y licitud de fondos Persona Humana',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'pepAuthoritiesCertificate',
    title: 'DDJJ PEP autoridades (52/2012)',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'uidInscriptionCertificateAsLender',
    title: 'Constancia de inscripciòn UIF de fondista',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'manualCopyPLAFT',
    title: 'Copia del manual de procedimientos PLA/FT',
    setUploadFile: updateValueOnBlur,
  },
];

export const legalPersonFiles = (updateValueOnBlur: updateField) => [
  {
    id: 'statuteStatutoryReform',
    title: 'Estatuto / Reforma estatutaria',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'cuitCertificate',
    title: 'Constancia de CUIT',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'proofGrossIncome',
    title: 'Constancia de Ingresos Brutos',
    setUploadFile: updateValueOnBlur,
  },

  {
    id: 'lastBalanceCertificate',
    title: '    Último balance certificado ',
    setUploadFile: updateValueOnBlur,
  },

  {
    id: 'proofLegalPerson',
    title: 'DDJJ de personas jurídicas',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'proofOfInscriptionUIF',
    title: 'Constancia de inscripción UIF Persona jurídica (De corresponder)',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'originLegalityFundsCertificate',
    title: 'DDJJ Origen y licitud de fondos Persona jurídica',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'currentAuthoritiesCertificate',
    title: 'DDJJ de autoridades vigentes',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'ActOfAssemblyCurrentauthorities',
    title: 'Acta de asamblea de designación de autoridades vigentes',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'ActOfGoverningBody',
    title: 'Acta de órgano directivo de distribución de cargos',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'currentAuthoritiesDNICertificates',
    title: 'DNI de autoridades vigentes',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'pepAuthoritiesCertificate',
    title: 'DDJJ PEP autoridades (52/2012)',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'regulatoryComplianceUIFCertificate',
    title: 'DDJJ Cumplimiento normativas UIF – Oficial de cumplimiento',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'uifInscriptionCertificate',
    title: 'Constancia inscripción UIF oficial de cumplimiento',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'meetingMinutesOfficialDesignation',
    title: 'Acta de asamblea designación oficial de cumplimiento',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'actPLAFT',
    title: 'Acta de órgano directivo aprobación manual de procedimientos PLA/FT',
    setUploadFile: updateValueOnBlur,
  },
  {
    id: 'manualCopyPLAFT',
    title: 'Copia del manual de procedimientos PLA/FT',
    setUploadFile: updateValueOnBlur,
  },
];
