/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../../assets/svg/ArrowRightIconSVG';

export default function CardPaymentPlane() {
  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          HAN
        </Text>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <ArrowRightIconSVG height="20" width="20" color="#fff" />
        </View>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          HND
        </Text>
      </View>
      <Text style={[styles.textInfo, { marginTop: 5 }]}>CN, 28 thg 4 2024</Text>

      <View style={{ marginTop: 5, alignItems: 'center' }}>
        <Text style={[styles.textInfo, { fontWeight: '500' }]}>1 Tiện ích</Text>
        <Text style={styles.textInfo}> Hành lý 2kg</Text>
        <Text style={styles.textInfo}> Bảo hiểm nhân thọ</Text>
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
