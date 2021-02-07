import { ILender } from './types';

export interface ILenderState {
  loading: boolean;
  lenderData: ILender;
  isLenderDataFetched: boolean;
  isSuccessfullyCreated: boolean;
}

export type ContainerState = ILenderState;
