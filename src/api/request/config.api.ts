import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5001/api/';

// import * as RequestInterceptor from './interceptors/request';
// import * as ResponseInterceptor from './interceptors/response';

const getInstance = (baseUrl: string | undefined) => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 900000,
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
