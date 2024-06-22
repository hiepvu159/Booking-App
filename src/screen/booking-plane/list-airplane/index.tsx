/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import CardItem from '../../../components/card-item';
import { RouteProp, useRoute } from '@react-navigation/native';
import { getListTicketPlane } from '../../../api/booking-plane.api';
import { RootStackParamList } from '../../../navigations/Navigation';
import { PlaneModel } from '../../../model/plane.model';

export default function ListPlane() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ListPlane'>>();
  const [listPlane, setListPlane] = useState<PlaneModel[]>([]);

  useEffect(() => {
    getListTicketPlane({
      start_location: params.addressFrom,
      end_location: params.addressTo,
      start_time: params.dateFrom,
    })
      .then((res) => {
        setListPlane(res.data);
      })
      .catch((err) => console.log(err));
  }, [params]);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane?.length ? (
          listPlane.map((item) => <CardItem data={item} key={item.id} />)
        ) : (
          <View>
            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
              Flight not found
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
    // paddingVertical: 10,
  },
});
