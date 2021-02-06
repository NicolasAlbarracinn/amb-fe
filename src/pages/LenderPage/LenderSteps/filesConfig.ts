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
