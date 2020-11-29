export const BASE_URL = `http://${getCurrentEnvironment()}:4000/api`;
export const GET_USER_LOGIN = `${BASE_URL}/users/login`;
export const GET_ACCOUNT_DATA = `${BASE_URL}/users/profile`;
export const UPDATE_ACCOUNT_DATA = `${BASE_URL}/users/profile/edit`;
export const GET_RENAPER_DATA = `${BASE_URL}/externals/renaper`;
export const GET_AFFILEATES_LIST = `${BASE_URL}/partners`;
//TODO: We should change this to a generic name like partners_url and what difines the type of request is the method
export const SAVE_PARTNER = `${BASE_URL}/partners`;
export const BENEFITS_URL = `${BASE_URL}/benefits`;

export function getCurrentEnvironment() {
  const host = window.location.hostname;
  return host;
}
