/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../../assets/svg/ArrowRightIconSVG';
import { useRoute } from '@react-navigation/native';

export default function CardPaymentPlane() {
  const { params }: any = useRoute();

  return (
    <View style={styles.container}>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {params?.addressFrom}
        </Text>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <ArrowRightIconSVG height="20" width="20" color="#fff" />
        </View>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          {params?.addressTo}
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <View>
          <View style={styles.wrapTime}>
            <Text style={styles.textInfo}>{params?.timeFrom}</Text>
            <Text style={styles.textInfo}> - </Text>
            <Text style={styles.textInfo}>{params?.timeTo} </Text>
            <Text style={[styles.textInfo]}>
              {''} {params?.dateFrom}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>{params?.typeSeat}</Text>
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
});
