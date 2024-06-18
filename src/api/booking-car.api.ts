import queryString from 'query-string';
import { request, requestAuthorized } from './request/config.api';
import { CarModel, TicketCarModal } from '../model/car.model';

export interface ListPlaneParams {
  start_location: string;
  end_location: string;
  start_time: any;
}

export interface PaymentCar {
  car_travel_id: number;
  user_id: number;
  seat_number: number;
  contact_with_name: string;
  contact_with_phone: string;
}

export const getListCatApi = (data: ListPlaneParams) => {
  const parmas = queryString.stringify(data);
  return request.get<CarModel[]>(`model/car_travel/search?${parmas}`);
};

export const paymentTicketCar = (data: PaymentCar) => {
  return requestAuthorized.post('model/car_travel/pay', {
    data,
  });
};

export const getTicketBoughtCar = (data: { user_id: string }) => {
  const parmas = queryString.stringify(data);
  return request.get<TicketCarModal[]>(`model/car_ticket/bought?${parmas}`);
};
