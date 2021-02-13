import moment from 'moment';

export const defaultBenefit = {
  benefitType: {
    value: '',
    isValid: false,
  },
  certificateNumber: {
    value: '',
    isValid: false,
  },
  applicationDate: {
    value: moment(new Date()).format('MM/DD/YYYY'),
    isValid: true,
  },
  portfolio: {
    value: '',
    isValid: false,
  },
  plan: {
    value: '',
    isValid: false,
  },
  signatureAmount: {
    value: '',
    isValid: false,
  },
  duesQuantity: {
    value: '',
    isValid: false,
  },
  duesAmount: {
    value: '',
    isValid: false,
  },
  amountGranted: {
    value: '',
    isValid: false,
  },
  observations: {
    value: '',
    isValid: true,
  },
  benefitStatus: {
    value: '',
    isValid: false,
  },
  commercializer: {
    value: '',
    isValid: false,
  },
  grantedPeriod: {
    value: '',
    isValid: false,
  },
  proceedingGranted: {
    value: '',
    isValid: false,
  },
  statusDate: {
    value: moment(new Date()).format('MM/DD/YYYY'),
    isValid: false,
  },
};

export const defaultDistribution = {
  repartition: {
    value: '',
    isValid: false,
  },
  distributionCode: {
    value: '0001',
    isValid: false,
  },
  dependence: {
    value: 'no específcica dependencia',
    isValid: false,
  },
  fileNumber: {
    value: '',
    isValid: false,
  },
  fileItem: {
    value: '',
    isValid: false,
  },
  paymentType: {
    value: '',
    isValid: true,
  },
  recoveryPaymentType: {
    value: '',
    isValid: true,
  },
  bankName: {
    value: '',
    isValid: false,
  },
  cbu: {
    value: '',
    isValid: false,
  },
  bankBranchName: {
    value: '',
    isValid: false,
  },
  bankAccountNumber: {
    value: '',
    isValid: false,
  },
  programCode: {
    value: '',
    isValid: true,
  },
  sequenceNumber: {
    value: '',
    isValid: true,
  },
};

// accountNumber: 1223313
// bank: "Banco Provincia"
// banking: 23132
// branch: 404
// cbu: 20372781727
// fileItem: "32131"
// fileNumber: 32131
// observations: "Ningunaddd"
// repartition: "slta"

export const defaultPartner = {
  partnerId: {
    value: '',
    isValid: false,
  },
  name: {
    value: '',
    isValid: false,
  },
  lastName: {
    value: '',
    isValid: false,
  },
  admissionDate: {
    value: '',
    isValid: false,
  },
  documentType: {
    value: '',
    isValid: false,
  },
  documentNumber: {
    value: '',
    isValid: false,
  },
  gender: {
    value: '',
    isValid: false,
  },
  cuil: {
    value: '',
    isValid: false,
  },
  civilState: {
    value: '',
    isValid: false,
  },
  status: {
    value: '',
    isValid: false,
  },
  email: {
    value: '',
    isValid: false,
  },
};

// "personalData": {
//   "documentType": "dni",
//   "documentNumber": 37278172,
//   "procedureNumber": 21233943,
//   "gender": "m",
//   "cuil": 20372781727,
//   "name": "Nicolas",
//   "lastName": "Albarracin",
//   "country": "argentina",
//   "birthPlace": "argentina",
//   "civilState": "s",
//   "email": "nicodare@gmail.com",
//   "phone": "1562685678",
//   "personalPhone": "1562685678",
//   "salary": 160000,
//   "netSalary": 11000,
//   "socialQuota": "6000",
//   "paymentType": "dr",
//   "recoveryPaymentType": "dbic",
//   "otherPerferences": "aaaddd"
// },
