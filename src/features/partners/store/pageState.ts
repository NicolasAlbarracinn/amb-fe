import { IPartnerList } from '../types';

export interface IPartnersState {
  loading: boolean;
  partnersList: IPartnerList[];
}

export type ContainerState = IPartnersState;
