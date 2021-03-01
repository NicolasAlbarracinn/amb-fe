import moment from 'moment';
import * as yup from 'yup';
import { IBenefitInfo } from './types';

export enum WizardStepsConfig {
  PARTER_STEP = 'partnerDetail',
  DISTRIBUTION_STEP = 'distributionDetail',
  DETAILS_STEP = 'benefitDetail',
}

export const defaultBenefit: IBenefitInfo = {
  benefitType: '',
  certificateNumber: '',
  applicationDate: moment(new Date()).format('MM/DD/YYYY'),
  portfolio: '',
  plan: '',
  signatureAmount: '',
  duesQuantity: '',
  duesAmount: '',
  amountGranted: '',
  observations: '',
  benefitStatus: 'ps',
  commercializer: '',
  grantedPeriod: '',
  fileGranted: '',
  statusDate: moment(new Date()).format('MM/DD/YYYY'),
};

export const defaultDistribution = {
  repartition: '',
  distributionCode: '0001',
  dependence: 'no específcica dependencia',
  fileNumber: '',
  fileItem: '',
  paymentMethod: '',
  paymentMethodRecovery: '',
  bankName: '',
  cbu: '',
  bankBranchName: '',
  bankAccountNumber: '',
  programCode: '',
  sequenceNumber: '',
};

export const defaultPartner = {
  partnerId: '',
  name: '',
  lastName: '',
  admissionDate: '',
  documentType: '',
  documentNumber: '',
  gender: '',
  cuil: '',
  civilState: '',
  status: '',
  email: '',
};

export const formBenefitSchema = yup.object().shape({
  benefitType: yup.string().notRequired(),
  certificateNumber: yup.string().required('campo requerido'),
  portfolio: yup.string().required('campo requerido'),
  plan: yup.string().required('campo requerido'),
  signatureAmount: yup.string().required('campo requerido'),
  duesQuantity: yup.string().required('campo requerido'),
  duesAmount: yup.string().required('campo requerido'),
  amountGranted: yup.string().required('campo requerido'),
  observations: yup.string().notRequired(),
  commercializer: yup.string().required('campo requerido'),
  grantedPeriod: yup.date().nullable().required('campo requerido'),
  fileGranted: yup.date().nullable().required('campo requerido'),
});

export const partnerValidationSchema = yup.object().shape({
  partnerId: yup.string().required('Campo Requerido'),
  name: yup.string().required('Campo Requerido'),
  lastName: yup.string().required('Campo Requerido'),
  admissionDate: yup.string().required('Campo Requerido'),
  documentType: yup.string().required('Campo Requerido'),
  documentNumber: yup.string().required('Campo Requerido'),
  gender: yup.string().required('Campo Requerido'),
  cuil: yup.string().required('Campo Requerido'),
  civilState: yup.string().required('Campo Requerido'),
  status: yup.string().required('Campo Requerido'),
  email: yup.string().required('Campo Requerido'),
});

export const distributionValidationSchema = yup.object().shape({
  repartition: yup.string().required('Campo Requerido'),
  distributionCode: yup.string().notRequired(),
  dependence: yup.string().notRequired(),
  fileNumber: yup.string().required('Campo Requerido'),
  fileItem: yup.string().required('Campo Requerido'),
  paymentMethod: yup.string().required('Campo Requerido'),
  paymentMethodRecovery: yup.string().required('Campo Requerido'),
  bankName: yup.string().required('Campo Requerido'),
  cbu: yup.string().required('Campo Requerido'),
  bankBranchName: yup.string().required('Campo Requerido'),
  bankAccountNumber: yup.string().required('Campo Requerido'),
  programCode: yup.string().notRequired(),
  sequenceNumber: yup.string().notRequired(),
});