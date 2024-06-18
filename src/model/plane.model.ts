// import moment from 'moment';

export interface PlaneParams {
  addressFrom: string;
  addressTo: string;
  dateFrom: any;
}

export interface PlaneModel {
  id: number;
  name: string;
  start_location: string;
  end_location: string;
  start_time: any;
  estimate_time: number;
  estimate_unit: any;
  plane_id: number;
  plane_name: string;
  firm: string;
  seat_basic_empty: number;
  seat_basic_value: number;
  seat_vip_empty: number;
  seat_vip_value: number;
}

export interface TicketPlaneModal {
  id: number;
  name: string;
  flight_id: number;
  start_location: string;
  end_location: string;
  time: any;
  buyer_id: number;
  seat_basic_number: number;
  seat_vip_number: number;
  ticket_value: number;
  contact_with_name: string;
  contact_with_phone: string;
}
