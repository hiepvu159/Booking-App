import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HotelModel } from '../../../model/hotel.model';

interface Props {
  data: HotelModel;
}

export default function CardLikedHotel({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>{data.name}</Text>
      <View style={styles.wrapInfo}>
        <Text>
          Địa điểm:
          <Text style={styles.textInfo}> {data.location}</Text>
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text>
          Sao yêu thích: <Text style={styles.textInfo}>{data.vote_star}</Text>
        </Text>
      </View>

      <View style={styles.wrapInfo}>
        <Text>
          Số lượng phòng thường còn trống:
          <Text style={styles.textInfo}> {data.room_basic_empty}</Text>
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text>
          Số lượng phòng VIP còn trống:
          <Text style={styles.textInfo}> {data.room_vip_empty}</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
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

  priceText: {
    color: '#F4601F',
  },
  priceWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
});
