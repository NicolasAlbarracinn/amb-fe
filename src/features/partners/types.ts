export interface IPartnerList {
  personalInfo: {
    firstName: string;
    lastName: string;
  };
  admissionDate: string;
  _id: string;
  patnerNumber: string;
  folderNumber: string;
  cuil: string;
  dni: string;
  status: boolean;
  distribution: string;
  comercializador: string;
  paymentMethod: string;
}

export interface IPesonalData {
  documentType: string;
  documentNumber: string;
  procedureNumber: string;
  gender: string;
  cuil: string;
  name: string;
  lastName: string;
  country: string;
  birthPlace: string;
  birthDate: string;
  age: string;
  civilState: string;
  email: string;
  phone: string;
  personalPhone: string;
  salary: string;
  netSalary: string;
  socialQuota: string;
  commercializer: string;
  paymentType: string;
  recoveryPaymentType: string;
  otherPerferences: string;
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

export interface IWorkInfo {
  repartition: string;
  fileNumber: string;
  fileItem: string;
  cbu: string;
  bankName: string;
  bankBranchName: string;
  bankBranchCode: string;
  bankAccountNumber: string;
  observations: string;
}

export interface IPartnerDetail {
  partnerId: number;
  status: string;
  personalData: IPesonalData;
  address: IAddress;
  workInfo: IWorkInfo;
  createdBy: string;
  modifiedBy: string;
  createdAt: string;
}
