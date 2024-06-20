import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CardLikedHotel from './card-liked-hotel';
import { HotelModel } from '../../model/hotel.model';
import { getLikedHotel } from '../../api/booking-hotel.api';

const data_fake: HotelModel[] = [
  {
    id: 123123,
    name: 'Hotel 123',
    location: 'HA NOI',
    vote_star: 113,
    room_basic_empty: 123123,
    room_vip_empty: 10,
  },
];
export default function LikedHotelScreen() {
  const [listPlane, setListPlane] = useState<HotelModel[]>(data_fake);

  useEffect(() => {
    getLikedHotel()
      .then((res) => setListPlane(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane.map((item) => (
          <CardLikedHotel data={item} key={item.id} />
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
