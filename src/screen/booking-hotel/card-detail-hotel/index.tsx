/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/Navigation';

export default function CardDetailHotel() {
  const {
    params: { data, roomNor, roomVip },
  } = useRoute<RouteProp<RootStackParamList, 'InfoHotel'>>();
  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo, styles.header]}>{data.location}</Text>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>{data.name}</Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>Phòng VIP: {roomVip}</Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>Phòng thường: {roomNor}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
  wrapInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfo: {
    color: 'black',
  },
  wrapTime: {
    width: 150,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 5,
    // justifyContent: 'space-between',
  },
  priceText: {
    color: '#F4601F',
  },
  priceWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
});
