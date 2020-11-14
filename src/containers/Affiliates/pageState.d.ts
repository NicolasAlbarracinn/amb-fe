import { IAffiliate } from './types';

export interface IAffiliatesState {
  loading: boolean;
  affiliatesList: IAffiliate[];
}

export type ContainerState = AffiliatesState;
