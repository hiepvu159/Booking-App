/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import LocationIconSVG from '../../../../assets/svg/LocationIconSVG';
import { Button, Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import ElevatorIconSVG from '../../../../assets/svg/ElevatorIconSVG';
import AirConditionerIconSVG from '../../../../assets/svg/AirConditionerIconSVG';
import ReceptionistIconSVG from '../../../../assets/svg/ReceptionistIconSVG';
import WifiIconSVG from '../../../../assets/svg/WifiIconSVG';
import CutleryIconSVG from '../../../../assets/svg/CutleryIconSVG';
import ParkingIconSVG from '../../../../assets/svg/ParkingIconSVG';

export default function DetailHotel() {
  const { navigate } = useNavigation();
  const images: string[] = [
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Local image
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Online image
    // ... more images
  ];
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        <SliderBox
          images={images}
          sliderBoxHeight={280}
          //   onCurrentImagePressed={onClick}
          parentWidth={Dimensions.get('window').width}
        />
        <View style={{ padding: 15 }}>
          <View style={{ marginBottom: 10 }}>
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
          <Divider />
          <View style={{ paddingVertical: 10 }}>
            <Text>Tiện Nghi</Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <ElevatorIconSVG color="#5B9EDE" />
                <Text style={styles.textUltis}>Thang máy</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <AirConditionerIconSVG color="#5B9EDE" />

                <Text style={styles.textUltis}>Máy lạnh</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <ReceptionistIconSVG color="#5B9EDE" />

                <Text style={styles.textUltis}>Lễ tân 24h</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <WifiIconSVG color="#5B9EDE" />

                <Text style={styles.textUltis}>Wifi</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <CutleryIconSVG color="#5B9EDE" />

                <Text style={styles.textUltis}>Nhà hàng</Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                <ParkingIconSVG color="#5B9EDE" />

                <Text style={styles.textUltis}>Chỗ đỗ xe</Text>
              </View>
            </View>
          </View>
          <Divider />
          <View style={{ paddingVertical: 10 }}>
            <Text>Mô Tả</Text>
            <Text>Khách sạn số 1 VN</Text>
          </View>
        </View>
      </View>
      <Button
        title={'Chọn phòng'}
        size="lg"
        buttonStyle={{ backgroundColor: '#F4601F' }}
        onPress={() => navigate('SelectRoom' as never)}
      />
    </View>
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
  textUltis: {
    // color:''
    fontSize: 12,
  },
});
