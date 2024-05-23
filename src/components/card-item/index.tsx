import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CardItem() {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  return (
    <View
      style={styles.container}
      onTouchStart={() =>
        navigate('InfoPlane' as never, {
          ...params,
          airPlaneName: 'VietNam Airline',
          timeFrom: '08:00',
          timeTo: '10:00',
          price: '5.000.000',
        })
      }>
      <Text style={styles.textInfo}>VietNam Airline</Text>
      <View style={styles.wrapInfo}>
        <View>
          <View style={styles.wrapTime}>
            <Text style={styles.textInfo}>08:00</Text>
            <Text style={styles.textInfo}> - </Text>
            <Text style={styles.textInfo}>10:00 </Text>
          </View>
        </View>
        <View style={styles.priceWrap}>
          <Text style={styles.priceText}>VND 5.000.000</Text>
          <Text>/khách</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
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
