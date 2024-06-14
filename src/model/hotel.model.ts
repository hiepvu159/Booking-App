// import moment from 'moment';

type StatusRoom = 'EMPTY' | 'PENDDING' | 'FULL';
type TypeRoom = 'BASIC' | 'VIP';

export interface HotelParams {
  addressFrom: string;
}

export interface HotelModel {
  id: number;
  name: string;
  location: string;
  vote_star: number;
  room_basic_empty: number;
  room_vip_empty: number;
}

export interface RoomModel {
  id: number;
  name: number;
  hotel_id: number;
  room_type: TypeRoom;
  room_status: StatusRoom;
  room_value: string;
}
