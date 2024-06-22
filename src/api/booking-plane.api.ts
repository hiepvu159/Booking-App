import queryString from 'query-string';
import { API_BASE_URL, request } from './request/config.api';
import { PlaneModel } from '../model/plane.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export interface ListPlaneParams {
  start_location: string;
  end_location: string;
  start_time: any;
}

export interface PaymentPlane {
  flight_id: number;
  seat_basic_number: number;
  seat_vip_number: number;
  contact_with_name: string;
  contact_with_phone: string;
}

export const getListTicketPlane = (data: ListPlaneParams) => {
  const parmas = queryString.stringify(data);
  return request.get<PlaneModel[]>(`model/flight/search?${parmas}`);
};

export const getTicketBoughtPlane = async () => {
  const token = await AsyncStorage.getItem('token');
  return axios.get(`${API_BASE_URL}model/flight_ticket/bought`, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const paymentTicketPlane = async (data: PaymentPlane) => {
  const token = await AsyncStorage.getItem('token');
  return axios.post('http://10.0.2.2:5001/api/model/flight/pay', data, {
    headers: {
      Authorization: 'Bearer' + ' ' + token,
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};
