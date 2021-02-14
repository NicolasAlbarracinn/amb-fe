import { IPlan, IBenefit, IBenefitListInfo } from './types';
import { IPartnerDetail } from '../Partners/types';

export interface IBenefitsState {
  loading: boolean;
  partnerInfo: IPartnerDetail | null;
  benefitData: IBenefit | null;
  benefitList: IBenefitListInfo[];
  benefitRecordCount: number;
  isBenefitDataFetched: boolean;
  benefitId: number | null;
  plans: IPlan[];
  plan: IPlan | null;
}

export type ContainerState = IBenefitsState;

//Get partner info
