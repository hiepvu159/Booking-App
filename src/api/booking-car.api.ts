import queryString from 'query-string';
import { request } from './request/config.api';
import { CarModel } from '../model/car.model';

export interface ListPlaneParams {
  start_location: string;
  end_location: string;
  start_time: any;
}

export const getListCatApi = (data: ListPlaneParams) => {
  const parmas = queryString.stringify(data);
  return request.get<CarModel[]>(`model/car_travel/search?${parmas}`);
};
