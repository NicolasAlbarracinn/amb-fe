import { GetAccountDataResponse } from './types';

export interface AuthState {
  isAuthentificating: boolean;
  isAuthenticated: boolean;
  account: {
    loading: boolean;
    accountData?: GetAccountDataResponse;
  };
}

export type ContainerState = AuthState;
