/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import LocationIconSVG from '../../../../assets/svg/LocationIconSVG';
import { Button, Divider } from '@rneui/themed';
import { RouteProp, useRoute } from '@react-navigation/native';
import ElevatorIconSVG from '../../../../assets/svg/ElevatorIconSVG';
import AirConditionerIconSVG from '../../../../assets/svg/AirConditionerIconSVG';
import ReceptionistIconSVG from '../../../../assets/svg/ReceptionistIconSVG';
import WifiIconSVG from '../../../../assets/svg/WifiIconSVG';
import CutleryIconSVG from '../../../../assets/svg/CutleryIconSVG';
import ParkingIconSVG from '../../../../assets/svg/ParkingIconSVG';
import { RootStackParamList } from '../../../navigations/Navigation';
import ModalFullScreen from '../../../components/modal-fullscreen';
import SelectRoom from '../SelectRoom';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ArrowRightIconSVG from '../../../../assets/svg/ArrowRightIconSVG';
import HeartIconSVG from '../../../../assets/svg/HeartIconSVG';
import { likeHotel } from '../../../api/booking-hotel.api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { jwtDecode } from 'jwt-decode';

export default function DetailHotel() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'DetailHotel'>>();
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState('#292D32');

  const images: string[] = [
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Local image
    'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Online image
    // ... more images
  ];

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const headerModal = useMemo(() => {
    return (
      <View
        style={{
          // marginBottom: 15,
          backgroundColor: '#5B9EDE',
          height: 60,
          padding: 10,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
          }}>
          <View
            style={{
              transform: 'rotate(180deg)',
              marginRight: 10,
            }}>
            <TouchableOpacity onPress={onCloseModal}>
              <ArrowRightIconSVG color="#fff" height="25" width="25" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.text, styles.textTitle]}>Chọn số lượng</Text>
          </View>
        </View>
      </View>
    );
  }, [onCloseModal]);

  const likeHotelHandle = useCallback(() => {
    likeHotel({
      hotel_id: params.data.id,
    }).then(() => setColor('#D62D00'));
  }, [params]);

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
            <Text
              style={[styles.textInfo, { fontWeight: '600', fontSize: 18 }]}>
              {params.data.name}
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginTop: 10,
                }}>
                <LocationIconSVG />
                <Text style={[{ marginTop: 2, fontSize: 13 }]}>
                  {params.data.location}
                </Text>
              </View>
              <Button type="clear" onPress={likeHotelHandle}>
                <HeartIconSVG color={color} />
              </Button>
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
            {/* <Text></Text> */}
          </View>
        </View>
      </View>
      <Button
        title={'Chọn phòng'}
        size="lg"
        buttonStyle={{ backgroundColor: '#F4601F' }}
        onPress={() => setIsOpen(true)}
      />
      <ModalFullScreen
        header={headerModal}
        content={<SelectRoom />}
        isOpen={isOpen}
        onClose={onCloseModal}
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
  text: {
    color: '#fff',
  },
  textTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
