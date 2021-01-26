import { IPortfolio, ILendersNamesList } from './types';

export interface IPortfolioState {
  loading: boolean;
  portfolioData: IPortfolio;
  lendersNameList: Array<ILendersNamesList>;
}

export type ContainerState = IPortfolioState;
