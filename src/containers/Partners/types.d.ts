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

interface IPesonalData {
  documentType: string;
  documentNumber: string;
  procedureNumber: string;
  gender: string;
  cuil: string;
  name: string;
  lastName: string;
  country: string;
  birthPlace: string;
  civilState: string;
  email: string;
  phone: string;
  personalPhone: string;
  salary: number;
  netSalary: number;
  socialQuota: string;
  paymentType: string;
  recoveryPaymentType: string;
  otherPerferences: string;
}

interface IAddress {
  streetAdress: string;
  floor: string;
  aptNumber: string;
  department: string;
  location: string;
  province: string;
  postalCode: string;
  observations: string;
}

interface IWorkInfo {
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
  adress: IAddress;
  workInfo: IWorkInfo;
  createdBy: string;
  modifiedBy: string;
  createdAt: string;
}
