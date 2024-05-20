/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../../../assets/svg/ArrowRightIconSVG';

export default function CardDetailHotel() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textInfo, styles.header]}>CN, 28 thg 4 2024</Text>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          Hà Nội
        </Text>
        <View style={{ marginTop: 10, marginHorizontal: 5 }}>
          <ArrowRightIconSVG height="20" width="20" />
        </View>
        <Text style={[styles.textInfo, styles.header, { marginTop: 10 }]}>
          Hải Phòng
        </Text>
      </View>

      <View style={styles.wrapInfo}>
        <View>
          <View style={styles.wrapTime}>
            <Text style={styles.textInfo}>08:00</Text>
            <Text style={styles.textInfo}> - </Text>
            <Text style={styles.textInfo}>10:00 </Text>
            <Text style={styles.textInfo}>• 1 điểm dừng</Text>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.textInfo}>1 ghế</Text>
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
