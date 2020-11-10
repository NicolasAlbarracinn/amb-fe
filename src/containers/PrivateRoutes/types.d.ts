// GET ACCOUNT

export type GetAccountRequest = {
  token: string;
};

export type GetAccountResponse = {
  user: any;
  error: boolean;
  status: string;
};

export type GetAccountDataResponse = {
  id?: string;
};
