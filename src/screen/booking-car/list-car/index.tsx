import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardItemCar from '../card-item';

export default function ListCar() {
  return (
    <View style={styles.container}>
      <CardItemCar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
