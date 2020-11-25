export interface IBenefitsState {
  loading: boolean;
  benefitData: object;
  isBenefitDataFetched: boolean;
}

export type ContainerState = IBenefitsState;
