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
export interface TicketCarModal {
  id: number;
  name: string;
  car_travel_id: number;
  start_location: string;
  end_location: string;
  time: any;
  buyer_id: number;
  seat_number: number;
  ticket_value: number;
  contact_with_name: string;
  contact_with_phone: string;
}
