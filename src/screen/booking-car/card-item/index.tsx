/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardItemCar() {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  return (
    <View
      style={styles.container}
      onTouchStart={() =>
        navigate('InfoCar' as never, {
          ...params,
          carName: 'Nhà xe Đình Lan',
          typeCar: 'Limousine',
          timeStart: '12:00',
          timeEnd: '16:00',
          price: '500.000',
        })
      }>
      <View>
        <Text style={[styles.textInfo, { fontWeight: '600' }]}>
          Nhà xe Đình Lan
        </Text>
        <Text style={[{ marginTop: 2, fontSize: 12 }]}>Limousine</Text>
        <View style={styles.wrapInfo}>
          <View>
            <View style={styles.wrapTime}>
              <Text style={styles.textInfo}>12:00</Text>
              <Text style={styles.textInfo}> - </Text>
              <Text style={styles.textInfo}>16:00 </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.priceWrap}>
        <Text style={styles.priceText}>VND 500.000</Text>
        <Text>/chỗ</Text>
      </View>
    </View>
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
