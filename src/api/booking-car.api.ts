import queryString from 'query-string';
import { API_BASE_URL, request } from './request/config.api';
import { CarModel } from '../model/car.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export interface ListPlaneParams {
  start_location: string;
  end_location: string;
  start_time: any;
}

export interface PaymentCar {
  car_travel_id: number;
  seat_number: number;
  contact_with_name: string;
  contact_with_phone: string;
}

export const getListCatApi = (data: ListPlaneParams) => {
  const parmas = queryString.stringify(data);
  return request.get<CarModel[]>(`model/car_travel/search?${parmas}`);
};

export const paymentTicketCar = async (data: PaymentCar) => {
  const token = await AsyncStorage.getItem('token');
  return axios.post(`${API_BASE_URL}model/car_travel/pay`, data, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getTicketBoughtCar = async () => {
  const token = await AsyncStorage.getItem('token');
  return axios.get(`${API_BASE_URL}model/car_ticket/bought`, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};
