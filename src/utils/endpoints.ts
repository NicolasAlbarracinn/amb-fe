export const BASE_URL = `http://${getCurrentEnvironment()}:4000/api`;
export const GET_USER_LOGIN = `${BASE_URL}/users/login`;
export const GET_ACCOUNT_DATA = `${BASE_URL}/users/profile`;
export const UPDATE_ACCOUNT_DATA = `${BASE_URL}/users/profile/edit`;
export const GET_RENAPER_DATA = `${BASE_URL}/externals/renaper`;
export const GET_AFFILEATES_LIST = `${BASE_URL}/partners`;
export const SAVE_PARTNER = `${BASE_URL}/partners`;
export const UPADTE_PARTNER_STATUS = `${BASE_URL}/partners/updateStatus`;

export function getCurrentEnvironment() {
  const host = window.location.hostname;
  return host;
}
