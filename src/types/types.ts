export interface QueryParameters {
  sortBy?: {
    field: string;
    value: string;
  };
  limit?: number;
  offset?: number;
  filter?: string;
}
