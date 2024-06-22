/* eslint-disable react-native/no-inline-styles */
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TicketPlaneModal } from '../../model/plane.model';
import CardInfoTicketPlane from './card-info-plane';
import { getTicketBoughtPlane } from '../../api/booking-plane.api';

export default function TicketPlaneBought() {
  const [listPlane, setListPlane] = useState<TicketPlaneModal[]>([]);

  useEffect(() => {
    getTicketBoughtPlane()
      .then((res) => setListPlane(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane?.length ? (
          listPlane.map((item) => (
            <CardInfoTicketPlane data={item} key={item.id} />
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
