/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../../assets/svg/ArrowRightIconSVG';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../navigations/Navigation';
import moment from 'moment';
import { FORMAT_DATE } from '../../screen/booking-plane';

export default function CardDetailPlane() {
  const {
    params: { data },
  } = useRoute<RouteProp<RootStackParamList, 'InfoPlane'>>();

  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo, styles.header]}>
        {moment(data.start_time).format(FORMAT_DATE)}
      </Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {data.start_location}
        </Text>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <ArrowRightIconSVG height="20" width="20" />
        </View>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {data.end_location}
        </Text>
      </View>

      <View style={styles.wrapInfo}>
        <View>
          <View style={styles.wrapTime}>
            <Text style={styles.textInfo}>{data.name}</Text>
            <Text style={styles.textInfo}> - </Text>
            <Text style={styles.textInfo}>{data.plane_name} </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>
          Thời gian dự kiến: {data.estimate_time} {data.estimate_unit}
        </Text>
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
