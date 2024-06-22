import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const API_BASE_URL = 'http://localhost:5001/api/';

// import * as RequestInterceptor from './interceptors/request';
// import * as ResponseInterceptor from './interceptors/response';

const getInstance = (baseUrl: string | undefined) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 900000,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
  //   instance.interceptors.response.use(
  //     ResponseInterceptor.onFullFilled,
  //     ResponseInterceptor.onRejected,
  //   );

  return instance;
};

const getInstanceAuthorized = (baseUrl: string | undefined) => {
  const token = AsyncStorage.getItem('token');
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: token ? 'Bearer' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },

    timeout: 900000,
  });
  //   instance.interceptors.request.use(
  //     RequestInterceptor.addAccessToken,
  //     RequestInterceptor.onRejected,
  //   );

  //   instance.interceptors.response.use(
  //     ResponseInterceptor.onFullFilled,
  //     ResponseInterceptor.onRejectedWithToken,
  //   );

  return instance;
};

const getInstanceAuthorizedLogout = (baseUrl: string | undefined) => {
  const token = AsyncStorage.getItem('ref_token');
  const instance = axios.create({
    baseURL: baseUrl,
    headers: {
      Authorization: token ? 'Bearer' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },

    timeout: 900000,
  });
  //   instance.interceptors.request.use(
  //     RequestInterceptor.addAccessToken,
  //     RequestInterceptor.onRejected,
  //   );

  //   instance.interceptors.response.use(
  //     ResponseInterceptor.onFullFilled,
  //     ResponseInterceptor.onRejectedWithToken,
  //   );

  return instance;
};
export const request = getInstance(API_BASE_URL);
export const requestAuthorized = getInstanceAuthorized(API_BASE_URL);
export const requestAuthorizedLogout =
  getInstanceAuthorizedLogout(API_BASE_URL);
