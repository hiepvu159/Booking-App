/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/Navigation';

export default function CardPaymentHotel() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PaymentHotel'>>();

  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo, { marginTop: 5 }]}>
        {params.data.location}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {params.data.name}
        </Text>
      </View>

      <View style={{ marginTop: 5, alignItems: 'center' }}>
        <Text style={[styles.textInfo, { fontWeight: '500' }]}>
          Số phòng VIP: {params?.roomVip}
        </Text>
        <Text style={[styles.textInfo, { fontWeight: '500' }]}>
          Số phòng thường: {params?.roomNor}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 15,
    fontWeight: '600',
  },
  container: {
    backgroundColor: '#5AC1F6',
    padding: 15,
    borderRadius: 5,
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#fff',
  },
  wrapInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInfo: {
    color: '#fff',
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
