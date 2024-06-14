// import moment from 'moment';

export interface CarParams {
  addressFrom: string;
  addressTo: string;
  dateFrom: any;
}

export interface CarModel {
  id: number;
  name: string;
  start_location: string;
  end_location: string;
  start_time: any;
  estimate_time: number;
  estimate_unit: any;
  car_id: number;
  car_name: string;
  firm: string;
  seat_empty: number;
  seat_value: number;
}
