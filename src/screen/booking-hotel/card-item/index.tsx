/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LocationIconSVG from '../../../../assets/svg/LocationIconSVG';
import DashedLine from 'react-native-dashed-line';
import { SliderBox } from 'react-native-image-slider-box';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/Navigation';
import { HotelModel } from '../../../model/hotel.model';

export default function CardItemHotel({ data }: { data: HotelModel }) {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const images: string[] = [
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Local image
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Online image
    // ... more images
  ];

  const onClick = useCallback(() => {
    navigate('DetailHotel', {
      data: data,
    });
  }, [data, navigate]);

  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 5,
          marginVertical: 10,
        }}>
        <SliderBox
          images={images}
          sliderBoxHeight={150}
          onCurrentImagePressed={onClick}
          parentWidth={Dimensions.get('window').width - 40}
        />
        <View style={styles.container}>
          <View>
            <Text style={[styles.textInfo, { fontWeight: '600' }]}>
              {data.name}
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <LocationIconSVG />
              <Text style={[{ marginTop: 2, fontSize: 13 }]}>
                {data.location}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 15 }}>
          <DashedLine
            dashLength={10}
            dashThickness={1}
            dashColor="#EAEAEA"
            dashGap={1}
          />
        </View>
        <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
          <Text>Số phòng thường còn trống: {data.room_basic_empty}</Text>
          <Text>Số phòng VIP còn trống: {data.room_vip_empty}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
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
    // justifyContent: 'space-between',
  },
  priceText: {
    color: '#F4601F',
    fontSize: 18,
    fontWeight: '600',
  },
  priceWrap: {
    display: 'flex',
    alignItems: 'flex-end',
    flexDirection: 'column',
    width: '100%',
    padding: 15,
  },
});
