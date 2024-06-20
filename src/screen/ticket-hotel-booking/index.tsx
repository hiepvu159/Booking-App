import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CardInfoTicketHotel from './card-info-hotel';
import { TicketHotelModal } from '../../model/hotel.model';
import { getTicketBoughtHotel } from '../../api/booking-hotel.api';

const data_fake: TicketHotelModal[] = [
  {
    id: 123123,
    name: 'AirPlane',
    location: 'HA NOI',
    time: new Date(),
    buyer_id: 113,
    hotel_id: 123123,
    contact_with_name: 'gege',
    room_basic_number: 10,
    room_vip_number: 2,
    ticket_value: 15000000,
    contact_with_phone: '123123123',
  },
];
export default function TicketHotelBought() {
  const [listHotel, setlistHotel] = useState<TicketHotelModal[]>(data_fake);

  useEffect(() => {
    getTicketBoughtHotel()
      .then((res) => setlistHotel(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listHotel.map((item) => (
          <CardInfoTicketHotel data={item} key={item.id} />
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
