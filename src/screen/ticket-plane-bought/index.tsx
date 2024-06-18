import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TicketPlaneModal } from '../../model/plane.model';
import CardInfoTicketPlane from './card-info-plane';
import { getTicketBoughtPlane } from '../../api/booking-plane.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

const data_fake: TicketPlaneModal[] = [
  {
    id: 123123,
    name: 'AirPlane',
    start_location: 'HA NOI',
    end_location: 'HCM',
    time: new Date(),
    buyer_id: 113,
    flight_id: 123123,
    contact_with_name: 'gege',
    seat_basic_number: 10,
    seat_vip_number: 2,
    ticket_value: 15000000,
    contact_with_phone: '123123123',
  },
];
export default function TicketPlaneBought() {
  const token: any = AsyncStorage.getItem('token');
  const userInfo: { id: string } = jwtDecode(token);

  const [listPlane, setListPlane] = useState<TicketPlaneModal[]>(data_fake);

  useEffect(() => {
    getTicketBoughtPlane({
      user_id: userInfo?.id,
    })
      .then((res) => setListPlane(res.data))
      .catch((err) => console.log(err));
  }, [userInfo]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane.map((item) => (
          <CardInfoTicketPlane data={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
