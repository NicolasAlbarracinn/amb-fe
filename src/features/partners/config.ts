import { IPesonalData } from './types';
import * as yup from 'yup';

export enum WizardStepsConfig {
  PERSONAL_DATA_STEP = 'personalData',
  ADDRESS_STEP = 'address',
  WORK_STEP = 'workInfo',
}

export const defaultPersonalData: IPesonalData = {
  documentType: '',
  documentNumber: '',
  procedureNumber: '',
  gender: '',
  cuil: '',
  name: '',
  lastName: '',
  country: '',
  birthPlace: '',
  birthDate: '',
  age: '',
  civilState: '',
  email: '',
  phone: '',
  personalPhone: '',
  salary: '',
  netSalary: '',
  socialQuota: '750',
  commercializer: '',
  paymentType: '',
  recoveryPaymentType: '',
  otherPerferences: '',
};

export const defaultAddress = {
  streetAddress: '',
  floor: '',
  aptNumber: '',
  department: '',
  location: '',
  province: '',
  postalCode: '',
  observations: '',
};

export const defaultWork = {
  repartition: '',
  fileNumber: '',
  fileItem: '',
  cbu: '',
  bankName: 'Banco Provincia de Buenos Aires',
  bankBranchName: '',
  bankBranchCode: '',
  bankAccountNumber: '',
  observations: '',
};

export const formPersonalDataSchema = yup.object().shape({
  documentType: yup.string().required('campo requerido'),
  documentNumber: yup.string().required('campo requerido').length(8, 'formato incorrecto'),
  procedureNumber: yup.string().required('campo requerido'),
  gender: yup.string().required('campo requerido'),
  cuil: yup.string().required('campo requerido').length(11, 'formato incorrecto'),
  name: yup.string().required('campo requerido'),
  lastName: yup.string().required('campo requerido'),
  country: yup.string().required('campo requerido'),
  birthPlace: yup.string().required('campo requerido'),
  civilState: yup.string().required('campo requerido'),
  email: yup.string().required('campo requerido').email('formato incorrecto'),
  phone: yup.string().required('campo requerido'),
  salary: yup.number().required('campo requerido'),
  netSalary: yup.number().required('campo requerido'),
  socialQuota: yup.number().required('campo requerido'),
  commercializer: yup.string().required('campo requerido'),
  paymentType: yup.string().required('campo requerido'),
});

export const formAddressSchema = yup.object().shape({
  streetAddress: yup.string().required('campo requerido'),
  floor: yup.string().required('campo requerido'),
  aptNumber: yup.string().required('campo requerido'),
  department: yup.string().required('campo requerido'),
  location: yup.string().required('campo requerido'),
  province: yup.string().required('campo requerido'),
  postalCode: yup.string().required('campo requerido'),
});

export const formWorkSchema = yup.object().shape({
  repartition: yup.string().required('campo requerido'),
  fileNumber: yup.string().required('campo requerido'),
  fileItem: yup.string().required('campo requerido'),
  cbu: yup.string().required('campo requerido').length(22, 'numero incorrecto'),
  bankName: yup.string().required('campo requerido'),
  bankBranchName: yup.string().required('campo requerido'),
  bankBranchCode: yup.string().required('campo requerido'),
  bankAccountNumber: yup.string().required('campo requerido'),
});
