import { IPortfolio, ILendersNamesList, IplanList } from '../types';

export interface IPortfolioState {
  loading: boolean;
  portfolioData: IPortfolio;
  lendersNameList: Array<ILendersNamesList>;
  planList: Array<IplanList>;
  isSuccessfullyCreated: boolean;
}

export type ContainerState = IPortfolioState;
