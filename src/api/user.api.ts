import { request } from './request/config.api';

export interface LoginParams {
  username: string;
  password: string;
  reply_password?: string;
}

export const loginAPI = (data: LoginParams) => {
  return request.post('api/identity/user/login', { data });
};

export const registerAPI = (data: LoginParams) => {
  return request.post('api/identity/user/register', { data });
};
