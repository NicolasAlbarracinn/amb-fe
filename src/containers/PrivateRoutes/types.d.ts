// GET ACCOUNT

export type GetAccountRequest = {
  token: string;
};

export type GetAccountResponse = {
  data: {
    account: {
      mappings: {
        account: {
          properties: GetAccountDataResponse;
        };
      };
    };
  };
  error: boolean;
  success: boolean;
};

export type GetAccountDataResponse = {
  id?: string;
};
