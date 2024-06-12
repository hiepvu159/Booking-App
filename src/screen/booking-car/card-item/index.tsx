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
            {data.name}
          </Text>
          <Text style={[{ marginTop: 2, fontSize: 12 }]}>{data.car_name}</Text>
          <View style={styles.wrapInfo}>
            <View>
              <View style={styles.wrapTime}>
                <Text style={styles.textInfo}>
                  {moment(data.start_time).format(FORMAT_DATE)}
                </Text>
                <Text style={styles.textInfo}> - </Text>
                <Text style={styles.textInfo}>16:00 </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.priceWrap}>
          <Text style={styles.priceText}>
            VND{' '}
            {data.seat_value.toLocaleString('en-Us', {
              style: 'currency',
            })}
          </Text>
          <Text>/chỗ</Text>
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textInfo: {
    color: 'black',
  },
  wrapTime: {
    width: 150,
    display: 'flex',
    flexDirection: 'row',
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
