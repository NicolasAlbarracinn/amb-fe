export const BASE_URL = `http://${getCurrentEnvironment()}:4000/api`;
export const GET_USER_LOGIN = `${BASE_URL}/user/login`;
export const GET_ACCOUNT_DATA = `${BASE_URL}/user/profile`;
export const UPDATE_ACCOUNT_DATA = `${BASE_URL}/user/profile/edit`;

export function getCurrentEnvironment() {
  const host = window.location.hostname;
  return host;
}
