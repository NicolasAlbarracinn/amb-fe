// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { LoginState } from 'containers/Login/pageState';
import { AuthState } from 'containers/PrivateRoutes/pageState';
import { IPartnersState } from 'containers/Partners/pageState';
import { IBenefitsState } from 'containers/Benefits/pageState';
import { IPortfolioState } from 'containers/Portfolio/pageState';
import { ILenderState } from 'containers/Lender/pageState';

import { PaginationState } from 'components/Pagination/pageState';
import { SearchBarState } from 'components/SearchBar/pageState';

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
  partners?: IPartnersState;
  pagination?: PaginationState;
  wizardContainer?: any;
  searchBar?: SearchBarState;
  benefits?: IBenefitsState;
  portfolios?: IPortfolioState;
  lenders?: ILenderState;
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
