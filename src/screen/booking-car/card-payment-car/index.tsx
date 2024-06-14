/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../../../assets/svg/ArrowRightIconSVG';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/Navigation';
import moment from 'moment';
import { FORMAT_DATE } from '../../booking-plane';

export default function CardPaymentCar() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PaymentCar'>>();

  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>
        {moment(params?.data.start_time).format(FORMAT_DATE)}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 5 }]}>
          {params.data.start_location}
        </Text>
        <View style={{ marginTop: 6, marginHorizontal: 5 }}>
          <ArrowRightIconSVG height="20" width="20" color="#fff" />
        </View>
        <Text style={[styles.textInfo, styles.header, { marginTop: 5 }]}>
          {params?.data.end_location}
        </Text>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={[styles.textInfo, styles.textAlign]}>
          Thời gian khởi hành : {moment(params.data.start_time).format('HH:mm')}
        </Text>
        <Text style={[styles.textInfo, styles.textAlign]}>
          Thời gian di chuyển dự kiến : {params.data.estimate_time}{' '}
          {params.data.estimate_unit}
        </Text>
      </View>
      <View>
        <Text style={styles.textInfo}>Số lượng ghế: {params.seatCount}</Text>
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
    alignItems: 'center',
    alignContent: 'center',
    textAlign: 'center',
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
  textAlign: {
    textAlign: 'center',
  },
});
