/* eslint-disable react-native/no-inline-styles */
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useMemo, useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import BedIconSVG from '../../../../assets/svg/BedIconSVG';
import TwoUserIconSVG from '../../../../assets/svg/TwoUserIconSVG';
import RulerMeterIconSVG from '../../../../assets/svg/RulerMeterIconSVG';
import { Button } from '@rneui/themed';
import InputSpinner from 'react-native-input-spinner';
import { RootStackParamList } from '../../../navigations/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { getListRoom } from '../../../api/booking-hotel.api';

const images: string[] = [
  'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Local image
  'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Online image
  // ... more images
];
export default function SelectRoom() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'DetailHotel'>>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [roomNor, setRoomNor] = useState(0);
  const [roomVip, setRoomVip] = useState(0);
  const [valueRoom, setValueRoom] = useState({
    roomNor: 0,
    roomVip: 0,
  });
  useEffect(() => {
    getListRoom({ hotel_id: params.data.id }).then((res) =>
      setValueRoom({
        roomNor: Number(
          res.data.find((item) => item.room_type === 'BASIC')?.room_value ??
            200000,
        ),
        roomVip: Number(
          res.data.find((item) => item.room_type === 'VIP')?.room_value ??
            500000,
        ),
      }),
    );
  }, [params]);

  const cardItemVip = useMemo(() => {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          borderRadius: 5,
          marginBottom: 20,
        }}>
        <SliderBox
          images={images}
          sliderBoxHeight={150}
          // onCurrentImagePressed={() => onClick('Vip')}
          parentWidth={Dimensions.get('window').width - 30}
        />
        <View style={styles.container}>
          <View>
            <Text
              style={[
                styles.textInfo,
                { fontWeight: '600', fontSize: 18, padding: 5 },
              ]}>
              Phòng giường đơn
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <TwoUserIconSVG color="#7C7C7D" width="20" height="20" />
              <Text
                style={[
                  {
                    marginTop: 2,
                    fontSize: 13,
                    marginLeft: 5,
                    marginRight: 10,
                  },
                ]}>
                2 Người lớn
              </Text>

              <RulerMeterIconSVG color="#7C7C7D" width="20" height="20" />
              <Text
                style={[
                  {
                    marginTop: 2,
                    fontSize: 13,
                    marginLeft: 5,
                    marginRight: 10,
                  },
                ]}>
                20m2
              </Text>

              <BedIconSVG color="#7C7C7D" width="20" height="20" />
              <Text
                style={[
                  {
                    marginTop: 2,
                    fontSize: 13,
                    marginLeft: 5,
                    marginRight: 10,
                  },
                ]}>
                1 giường đôi
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ marginBottom: 10 }}>Số lượng phòng VIP</Text>
          <InputSpinner
            max={params.data.room_vip_empty}
            min={0}
            step={1}
            colorMax={'#f04048'}
            colorMin={'#40c5f4'}
            value={roomNor}
            onChange={(num: number) => {
              setRoomNor(num);
            }}
          />
        </View>
      </View>
    );
  }, [params.data.room_vip_empty, roomNor]);

  const cardItem = useMemo(() => {
    return (
      <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
        <SliderBox
          images={images}
          sliderBoxHeight={150}
          // onCurrentImagePressed={() => onClick('Nor')}
          parentWidth={Dimensions.get('window').width - 30}
        />
        <View style={styles.container}>
          <View>
            <Text
              style={[
                styles.textInfo,
                { fontWeight: '600', fontSize: 18, padding: 5 },
              ]}>
              Phòng giường đôi
            </Text>
            <View
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
                flexDirection: 'row',
                marginTop: 5,
              }}>
              <TwoUserIconSVG color="#7C7C7D" width="20" height="20" />
              <Text
                style={[
                  {
                    marginTop: 2,
                    fontSize: 13,
                    marginLeft: 5,
                    marginRight: 10,
                  },
                ]}>
                2 Người lớn
              </Text>

              <RulerMeterIconSVG color="#7C7C7D" width="20" height="20" />
              <Text
                style={[
                  {
                    marginTop: 2,
                    fontSize: 13,
                    marginLeft: 5,
                    marginRight: 10,
                  },
                ]}>
                20m2
              </Text>

              <BedIconSVG color="#7C7C7D" width="20" height="20" />
              <Text
                style={[
                  {
                    marginTop: 2,
                    fontSize: 13,
                    marginLeft: 5,
                    marginRight: 10,
                  },
                ]}>
                2 giường đơn
              </Text>
            </View>
          </View>
        </View>
        <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
          <Text style={{ marginBottom: 10 }}>Số lượng phòng VIP</Text>
          <InputSpinner
            max={params.data.room_basic_empty}
            min={0}
            step={1}
            colorMax={'#f04048'}
            colorMin={'#40c5f4'}
            value={roomVip}
            onChange={(num: number) => {
              setRoomVip(num);
            }}
          />
        </View>
      </View>
    );
  }, [params.data.room_basic_empty, roomVip]);

  const heightMax = Dimensions.get('window').height - 80;

  return (
    <View
      style={{
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: heightMax,
        backgroundColor: '#E3E3E3',
      }}>
      <View>
        <View>
          <ScrollView scrollEnabled={false} keyboardShouldPersistTaps="handled">
            {cardItemVip}
            {cardItem}
          </ScrollView>
        </View>
      </View>
      <View>
        <Button
          // containerStyle={{ marginBottom: 120 }}
          title={'Xác nhận'}
          onPress={() =>
            navigate('InfoHotel', {
              data: params.data,
              roomNor: roomNor,
              roomVip: roomVip,
              valueRoom: valueRoom,
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
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
    fontWeight: '600',
  },
  wrapOption: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    padding: 15,
  },
  option: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: 'black',
    marginBottom: 10,
  },
});
