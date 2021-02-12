import { IplanList } from '../Portfolio/types';

export interface IPlan extends IplanList {
  _id: string;
}

export interface IBenefitsState {
  loading: boolean;
  benefitData: object;
  isBenefitDataFetched: boolean;
  benefitId: number | null;
  plans: IPlan[];
  plan: IPlan | null;
}

export type ContainerState = IBenefitsState;
