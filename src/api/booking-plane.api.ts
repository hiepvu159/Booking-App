import queryString from 'query-string';
import { request, requestAuthorized } from './request/config.api';
import { PlaneModel, TicketPlaneModal } from '../model/plane.model';

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

export const getTicketBoughtPlane = () => {
  return requestAuthorized.get<TicketPlaneModal[]>(
    `model/flight_ticket/bought}`,
  );
};

export const paymentTicketPlane = (data: PaymentPlane) => {
  return requestAuthorized.post('model/flight/pay', data);
};
