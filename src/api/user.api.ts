import { request, requestAuthorized } from './request/config.api';

export interface LoginParams {
  name: string;
  password: string;
  reply_password?: string;
}

export const loginAPI = (data: LoginParams) => {
  return request.post('identity/user/login', { data });
};

export const registerAPI = (data: LoginParams) => {
  return request.post('identity/user/register', { data });
};

export const logoutAPI = () => {
  return requestAuthorized.post('identity/user/logout');
};
