/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardItemHotel from '../card-item';
import { RouteProp, useRoute } from '@react-navigation/native';
import { HotelModel } from '../../../model/hotel.model';
import { RootStackParamList } from '../../../navigations/Navigation';
import { ScrollView } from 'react-native-gesture-handler';
import { getListTicketHotel } from '../../../api/booking-hotel.api';

export default function ListHotels() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ListHotel'>>();
  const [listHotel, setListHotel] = useState<HotelModel[]>([]);

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
        {listHotel?.length ? (
          listHotel.map((item) => <CardItemHotel data={item} key={item.id} />)
        ) : (
          <View>
            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
              Hotel not found
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
    paddingVertical: 10,
  },
});
