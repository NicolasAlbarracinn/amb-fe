import { IPartner } from './types';

export interface IPartnersState {
  loading: boolean;
  partnersList: IPartner[];
}

export type ContainerState = PartnersState;
