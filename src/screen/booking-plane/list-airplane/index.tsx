import React from 'react';
import { StyleSheet, View } from 'react-native';
import CardItem from '../../../components/card-item';

export default function ListPlane() {
  return (
    <View style={styles.container}>
      <CardItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
