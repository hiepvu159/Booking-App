import queryString from 'query-string';
import { API_BASE_URL, request } from './request/config.api';
import { HotelModel, RoomModel } from '../model/hotel.model';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export interface ListHotelParams {
  location: string;
}

export interface PaymentHotel {
  hotel_id: number;
  room_basic_number: number;
  room_vip_number: number;
  contact_with_name: string;
  contact_with_phone: string;
}

export const getListTicketHotel = (data: ListHotelParams) => {
  const parmas = queryString.stringify(data);
  return request.get<HotelModel[]>(`model/hotel/search?${parmas}`);
};

export const getListRoom = (data: { hotel_id: number }) => {
  const parmas = queryString.stringify(data);
  return request.get<RoomModel[]>(`model/room/search?${parmas}`);
};

export const paymentTicketHotel = async (data: PaymentHotel) => {
  const token = await AsyncStorage.getItem('token');
  return axios.post(`${API_BASE_URL}model/hotel/pay`, data, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getTicketBoughtHotel = async () => {
  const token = await AsyncStorage.getItem('token');
  return axios.get(`${API_BASE_URL}model/room_ticket/bought`, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const likeHotel = async (data: { hotel_id: number }) => {
  const token = await AsyncStorage.getItem('token');
  return axios.post(`${API_BASE_URL}model/like`, data, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};

export const getLikedHotel = async () => {
  const token = await AsyncStorage.getItem('token');
  return axios.get(`${API_BASE_URL}model/hotel/like`, {
    headers: {
      Authorization: token ? 'Bearer' + ' ' + token : '',
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  });
};
