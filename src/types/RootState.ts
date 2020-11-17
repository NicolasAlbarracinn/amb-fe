// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { LoginState } from 'containers/Login/pageState';
import { AuthState } from 'containers/PrivateRoutes/pageState';
import { IAffiliatesState } from 'containers/Affiliates/pageState';

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  auth?: AuthState;
  login?: LoginState;
  profile?: any;
  affiliates?: IAffiliatesState;
  wizardContainer?: any;
}

export interface QueryParameters {
  sortBy?: {
    field: string;
    value: string;
  };
  limit?: number;
  offset?: number;
  filter?: string;
}
