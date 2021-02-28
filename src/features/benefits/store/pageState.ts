import { IPlan, IBenefit, IBenefitList, IPartner } from '../types';

export interface IBenefitsState {
  loading: boolean;
  partnerInfo: IPartner | IBenefit | null;
  benefitData: IBenefit | null;
  benefitList: IBenefitList[];
  benefitRecordCount: number;
  isBenefitDataFetched: boolean;
  isSuccessfullyCreated: boolean;
  benefitId: number | null;
  plans: IPlan[];
  plan: IPlan | null;
}

export type ContainerState = IBenefitsState;

//Get partner info
