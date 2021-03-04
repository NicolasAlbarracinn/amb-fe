// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

import { LoginState } from 'features/authentication/store/pageState';
import { AuthState } from 'features/PrivateRoutes/pageState';
import { IBenefitsState } from 'features/benefits/store/pageState';
import { IPartnersState } from 'features/partners/store/pageState';
import { ILenderState } from 'features/Lender/store/pageState';

import { SearchBarState } from 'components/SearchBar/pageState';
import { PaginationState } from 'components/Pagination/pageState';
/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
  Properties are optional because they are injected when the components are mounted sometime in your application's life. 
  So, not available always
*/
export interface RootState {
  auth?: AuthState;
  login?: LoginState;
  benefits?: IBenefitsState;
  partners?: IPartnersState;
  lenders?: ILenderState;
  profile?: any;
  wizard: any;
  searchBar?: SearchBarState;
  pagination?: PaginationState;
}
