/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../../navigations/Navigation';
import { CarModel } from '../../../model/car.model';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import { FORMAT_DATE } from '../../booking-plane';

interface Props {
  data: CarModel;
}

export default function CardItemCar({ data }: Props) {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() =>
        navigate('InfoCar', {
          data: data,
        })
      }>
      <View style={styles.container}>
        <View>
          <Text style={[styles.textInfo, { fontWeight: '600' }]}>
            {data.name} - {data.car_name}
          </Text>
          <View style={styles.wrapInfo}>
            <Text>
              Thời gian khởi hành:{' '}
              <Text style={styles.textInfo}>
                {moment(data.start_time).format(FORMAT_DATE)}
              </Text>
            </Text>
          </View>
          <View style={styles.wrapInfo}>
            <Text>
              Thời gian dự kiến:{' '}
              <Text style={styles.textInfo}>
                {moment(data.start_time).format(FORMAT_DATE)}
              </Text>
            </Text>
          </View>
        </View>
        <View style={styles.wrapInfo}>
          <Text>
            Số lượng ghế còn trống:{' '}
            <Text style={styles.textInfo}>{data.seat_empty}</Text>
          </Text>
          <View style={styles.priceWrap}>
            <Text style={styles.priceText}>
              VND {data.seat_value.toLocaleString('en-us')}
            </Text>
            <Text>/ghế</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  wrapInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textInfo: {
    color: 'black',
  },
  wrapTime: {
    // width: 150,
    // display: 'flex',
    // flexDirection: 'row',
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
