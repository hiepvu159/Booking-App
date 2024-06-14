import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import CardItemHotel from '../card-item';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HotelModel } from '../../../model/hotel.model';
import { RootStackParamList } from '../../../navigations/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { getListTicketHotel } from '../../../api/booking-hotel.api';

const data_fake: HotelModel[] = [
  {
    id: 123123,
    name: 'Hotelv',
    location: 'HA NOI',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
  {
    id: 12312555322,
    name: 'Hotelv123',
    location: 'HA NOI1',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
  {
    id: 12377712322,
    name: 'Hotelv123',
    location: 'HA NOI1',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
  {
    id: 12311112322,
    name: 'Hotelv123',
    location: 'HA NOI1',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
  {
    id: 12313332322,
    name: 'Hotelv123',
    location: 'HA NOI1',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
  {
    id: 1231232222,
    name: 'Hotelv123',
    location: 'HA NOI1',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
  {
    id: 1231232211,
    name: 'Hotelv123',
    location: 'HA NOI1',
    room_basic_empty: 10,
    room_vip_empty: 10,
    vote_star: 10,
  },
];

export default function ListHotels() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ListHotel'>>();
  const [listHotel, setListHotel] = useState<HotelModel[]>(data_fake);

  useEffect(() => {
    getListTicketHotel({
      location: params.addressFrom,
    })
      .then((res) => setListHotel(res.data))
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listHotel.map((item) => (
          <CardItemHotel data={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
