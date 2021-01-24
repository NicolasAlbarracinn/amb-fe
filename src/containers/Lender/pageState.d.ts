import { ILender } from './types';

export interface ILenderState {
  loading: boolean;
  lenderData: ILender;
}

export type ContainerState = ILenderState;
