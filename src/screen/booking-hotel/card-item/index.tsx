/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from '@react-navigation/native';
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

export default function CardItemHotel() {
  const { params } = useRoute();

  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const images: string[] = [
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Local image
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Online image
    // ... more images
  ];

  const onClick = useCallback(() => {
    navigate('DetailHotel', {
      ...params,
      nameHotel: 'Zalo Sea Hotel',
      price: '1.000.000',
      addressHotel: 'Phước Mỹ, Đà Nẵng',
    });
  }, [navigate, params]);

  return (
    <TouchableOpacity onPress={onClick}>
      <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
        <SliderBox
          images={images}
          sliderBoxHeight={150}
          onCurrentImagePressed={onClick}
          parentWidth={Dimensions.get('window').width - 40}
        />
        <View style={styles.container}>
          <View>
            <Text style={[styles.textInfo, { fontWeight: '600' }]}>
              Zalo Sea Hotel
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
                Phước Mỹ, Đà Nẵng
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
        <View style={styles.priceWrap}>
          <Text style={styles.priceText}>VND 1.000.000</Text>
          <Text>/phòng/đêm</Text>
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
