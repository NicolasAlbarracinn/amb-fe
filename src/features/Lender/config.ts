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
