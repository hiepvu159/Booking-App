import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CardItemCar from '../card-item';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/Navigation';
import { CarModel } from '../../../model/car.model';
import { getListCatApi } from '../../../api/booking-car.api';
import moment from 'moment';

const DATA_DEFAULT: CarModel[] = [
  {
    id: 123123,
    name: 'Car',
    start_location: 'HA NOI',
    end_location: 'HCM',
    start_time: new Date(),
    estimate_time: 8,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane',
    firm: 'Firm',
    seat_empty: 10,
    seat_value: 5000000,
  },
  {
    id: 12312555322,
    name: 'Car123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_empty: 1,
    seat_value: 15000000,
  },
  {
    id: 12377712322,
    name: 'Car123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_empty: 1,
    seat_value: 15000000,
  },
  {
    id: 12311112322,
    name: 'Car123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_empty: 1,
    seat_value: 15000000,
  },
  {
    id: 12313332322,
    name: 'Car123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_empty: 1,
    seat_value: 15000000,
  },
  {
    id: 1231232222,
    name: 'Car123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_empty: 1,
    seat_value: 15000000,
  },
  {
    id: 1231232211,
    name: 'Car123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    car_id: 123123,
    car_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_empty: 1,
    seat_value: 15000000,
  },
];

export default function ListCar() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ListCar'>>();
  const [listCar, setListCar] = useState<CarModel[]>(DATA_DEFAULT);

  useEffect(() => {
    getListCatApi({
      start_location: params.addressFrom,
      end_location: params.addressTo,
      start_time: moment(params.dateFrom).toISOString(),
    }).then((res) => setListCar(res.data));
  }, [params]);

  return (
    <View style={styles.container}>
      {listCar.map((item) => (
        <CardItemCar data={item} key={item.id} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
