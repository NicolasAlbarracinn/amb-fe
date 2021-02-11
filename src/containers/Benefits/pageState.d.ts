import { IplanList } from '../Portfolio/types';

export interface IBenefitsState {
  loading: boolean;
  benefitData: object;
  isBenefitDataFetched: boolean;
  benefitId: number | null;
  plan: IplanList[];
}

export type ContainerState = IBenefitsState;
