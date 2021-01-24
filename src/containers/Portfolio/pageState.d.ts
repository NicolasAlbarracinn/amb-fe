import { IPortfolio } from './types';

export interface IPortfolioState {
  loading: boolean;
  portfolioData: IPortfolio;
}

export type ContainerState = IPortfolioState;
