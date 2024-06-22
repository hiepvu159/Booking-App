import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL, request } from './request/config.api';
import axios from 'axios';

export interface LoginParams {
  name: string;
  password: string;
  reply_password?: string;
}

export const loginAPI = (data: LoginParams) => {
  return request.post('identity/user/login', data);
};

export const registerAPI = (data: LoginParams) => {
  return request.post('identity/user/register', data);
};

export const logoutAPI = async () => {
  const token = AsyncStorage.getItem('ref_token');
  return axios.post(`${API_BASE_URL}identity/user/logou`, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};
