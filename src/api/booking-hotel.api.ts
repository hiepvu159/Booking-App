import queryString from 'query-string';
import { request, requestAuthorized } from './request/config.api';
import { HotelModel, RoomModel, TicketHotelModal } from '../model/hotel.model';

export interface ListHotelParams {
  location: string;
}

export interface PaymentHotel {
  flight_id: number;
  seat_basic_number: number;
  seat_vip_number: number;
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

export const paymentTicketHotel = (data: PaymentHotel) => {
  return requestAuthorized.post('model/flight/pay', {
    data,
  });
};

export const getTicketBoughtHotel = () => {
  return requestAuthorized.get<TicketHotelModal[]>(`model/room_ticket/bought}`);
};

export const likeHotel = (data: { hotel_id: number }) => {
  return requestAuthorized.post<TicketHotelModal[]>(`model/like`, { data });
};

export const getLikedHotel = () => {
  return requestAuthorized.get<HotelModel[]>(`model/hotel/like}`);
};
