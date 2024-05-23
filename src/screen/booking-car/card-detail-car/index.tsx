/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../../../assets/svg/ArrowRightIconSVG';
import { useRoute } from '@react-navigation/native';

export default function CardDetailCar() {
  const { params }: any = useRoute();
  console.log('🚀 ~ CardDetailCar ~ params:', params);
  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo, styles.header]}>{params?.dateFrom}</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {params?.addressFrom}
        </Text>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <ArrowRightIconSVG height="20" width="20" />
        </View>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {params?.addressTo}
        </Text>
      </View>

      <View style={styles.wrapInfo}>
        <View>
          <View style={styles.wrapTime}>
            <Text style={styles.textInfo}>{params?.timeStart}</Text>
            <Text style={styles.textInfo}> - </Text>
            <Text style={styles.textInfo}>{params?.timeEnd} </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>{params?.numberCustomer} Ghế</Text>
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
