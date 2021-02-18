import { IplanList } from '../Portfolio/types';

export interface IPlan extends IplanList {
  _id: string;
}

export interface IPartnerInfo {
  partnerId: string;
  name: string;
  lastName: string;
  admissionDate: string;
  documentType: string;
  documentNumber: string;
  gender: string;
  cuil: string;
  civilState: string;
  status: string;
  email: string;
}

export interface IDistributionInfo {
  repartition: string;
  distributionCode: string;
  dependence: string;
  fileNumber: string;
  fileItem: string;
  paymentType: string;
  recoveryPaymentType: string;
  bankName: string;
  cbu: string;
  bankBranchName: string;
  bankAccountNumber: string;
  programCode: string;
  sequenceNumber: string;
}

export interface IBenefitInfo {
  benefitId: number;
  lotNumber?: string;
  benefitType: string;
  certificateNumber: string;
  applicationDate: string;
  portfolio: string;
  plan: string;
  signatureAmount: string;
  duesQuantity: string;
  duesAmount: string;
  amountGranted: string;
  observations: string;
  benefitStatus: string;
  grantedPeriod: string;
  fileGranted: string;
  statusDate: string;
}

export interface IPartner {
  partnerDetail: IPartnerInfo;
  distributionDetail: IDistributionInfo;
}

export type IBenefit = IBenefitInfo & IPartner;

export interface IBenefitList {
  _id?: string;
  benefitId: number;
  portfolio: string;
  benefitStatus: string;
}
