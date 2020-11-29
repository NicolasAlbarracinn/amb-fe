export interface IBenefitsState {
  loading: boolean;
  benefitData: object;
  isBenefitDataFetched: boolean;
  benefitId: number | null;
}

export type ContainerState = IBenefitsState;
