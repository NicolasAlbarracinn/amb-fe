export const BASE_URL = `http://${getCurrentEnvironment()}:4000`;
export const GET_USER_LOGIN = `${BASE_URL}/users/login`;
export const GET_ACCOUNT_DATA = `${BASE_URL}/users/profile`;
export const UPDATE_ACCOUNT_DATA = `${BASE_URL}/users/profile/edit`;

export function getCurrentEnvironment() {
  const host = window.location.hostname;
  return host;
}
