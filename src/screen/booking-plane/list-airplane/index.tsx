import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CardItem from '../../../components/card-item';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getListTicketPlane } from '../../../api/booking-plane.api';
import moment from 'moment';
import { RootStackParamList } from '../../../navigations/Navigation';
import { PlaneModel } from '../../../model/plane.model';

const data_fake: PlaneModel[] = [
  {
    id: 123123,
    name: 'AirPlane',
    start_location: 'HA NOI',
    end_location: 'HCM',
    start_time: new Date(),
    estimate_time: 8,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane',
    firm: 'Firm',
    seat_basic_empty: 10,
    seat_basic_value: 5000000,
    seat_vip_empty: 2,
    seat_vip_value: 15000000,
  },
  {
    id: 12312555322,
    name: 'AirPlane123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_basic_empty: 1,
    seat_basic_value: 15000000,
    seat_vip_empty: 28,
    seat_vip_value: 125000000,
  },
  {
    id: 12377712322,
    name: 'AirPlane123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_basic_empty: 1,
    seat_basic_value: 15000000,
    seat_vip_empty: 28,
    seat_vip_value: 125000000,
  },
  {
    id: 12311112322,
    name: 'AirPlane123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_basic_empty: 1,
    seat_basic_value: 15000000,
    seat_vip_empty: 28,
    seat_vip_value: 125000000,
  },
  {
    id: 12313332322,
    name: 'AirPlane123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_basic_empty: 1,
    seat_basic_value: 15000000,
    seat_vip_empty: 28,
    seat_vip_value: 125000000,
  },
  {
    id: 1231232222,
    name: 'AirPlane123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_basic_empty: 1,
    seat_basic_value: 15000000,
    seat_vip_empty: 28,
    seat_vip_value: 125000000,
  },
  {
    id: 1231232211,
    name: 'AirPlane123',
    start_location: 'HA NOI1',
    end_location: 'HCM2',
    start_time: new Date(),
    estimate_time: 3,
    estimate_unit: 'HOUR',
    plane_id: 123123,
    plane_name: 'VietNam Airlane2323',
    firm: 'Firm',
    seat_basic_empty: 1,
    seat_basic_value: 15000000,
    seat_vip_empty: 28,
    seat_vip_value: 125000000,
  },
];

export default function ListPlane() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ListPlane'>>();
  const [listPlane, setListPlane] = useState<PlaneModel[]>(data_fake);
  useEffect(() => {
    getListTicketPlane({
      start_location: params.addressFrom,
      end_location: params.addressTo,
      start_time: moment(params.dateFrom).toISOString(),
    })
      .then((res) => setListPlane(res.data))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane.map((item) => (
          <CardItem data={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    // paddingVertical: 10,
  },
});
