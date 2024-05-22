import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardItemHotel from '../card-item';

export default function ListHotels() {
  return (
    <View style={styles.container}>
      <CardItemHotel />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
