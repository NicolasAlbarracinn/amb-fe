import { ILender } from './types';

export interface ILenderState {
  loading: boolean;
  lenderData: ILender;
  isLenderDataFetched: boolean;
}

export type ContainerState = ILenderState;
