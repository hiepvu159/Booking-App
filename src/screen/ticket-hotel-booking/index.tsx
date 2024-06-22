/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardInfoTicketHotel from './card-info-hotel';
import { TicketHotelModal } from '../../model/hotel.model';
import { getTicketBoughtHotel } from '../../api/booking-hotel.api';

export default function TicketHotelBought() {
  const [listHotel, setlistHotel] = useState<TicketHotelModal[]>([]);

  useEffect(() => {
    getTicketBoughtHotel()
      .then((res) => {
        console.log('🚀 ~ .then ~ res:', res.data);

        setlistHotel(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listHotel?.length ? (
          listHotel.map((item) => (
            <CardInfoTicketHotel data={item} key={item.id} />
          ))
        ) : (
          <View>
            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
              No Data
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
