import { IPlan, IBenefit } from './types';
import { IPartnerDetail } from '../Partners/types';

export interface IBenefitsState {
  loading: boolean;
  partnerInfo: IPartnerDetail | null;
  benefitData: IBenefit | null;
  isBenefitDataFetched: boolean;
  benefitId: number | null;
  plans: IPlan[];
  plan: IPlan | null;
}

export type ContainerState = IBenefitsState;

//Get partner info
