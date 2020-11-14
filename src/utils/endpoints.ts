export const BASE_URL = `http://${getCurrentEnvironment()}:4000/api`;
export const GET_USER_LOGIN = `${BASE_URL}/users/login`;
export const GET_ACCOUNT_DATA = `${BASE_URL}/users/profile`;
export const UPDATE_ACCOUNT_DATA = `${BASE_URL}/users/profile/edit`;
export const GET_AFFILIATED_INFO = `${BASE_URL}/affiliates`;

export function getCurrentEnvironment() {
  const host = window.location.hostname;
  return host;
}
