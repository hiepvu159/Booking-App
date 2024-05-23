/* eslint-disable react-native/no-inline-styles */
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useCallback, useMemo, useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import UserIconSVG from '../../../../assets/svg/UserIconSVG';
import BedIconSVG from '../../../../assets/svg/BedIconSVG';
import TwoUserIconSVG from '../../../../assets/svg/TwoUserIconSVG';
import RulerMeterIconSVG from '../../../../assets/svg/RulerMeterIconSVG';
import { Button, Divider } from '@rneui/themed';
import { RadioButton } from 'react-native-paper';

const images: string[] = [
  'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Local image
  'https://dyf.vn/wp-content/uploads/2021/11/thiet-ke-noi-that-phong-khach-san-hien-dai.jpg', // Online image
  // ... more images
];
export default function SelectRoom() {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  const [typeRoom, setTypeRoom] = useState('');
  const onClick = useCallback((value) => {
    if (value === 'Vip') {
      setTypeRoom('Phòng giường đơn');
    } else {
      setTypeRoom('Phòng giường đôi');
    }
  }, []);

  const cardItemVip = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => onClick('Vip')}>
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: 5,
            marginBottom: 20,
          }}>
          <SliderBox
            images={images}
            sliderBoxHeight={150}
            onCurrentImagePressed={() => onClick('Vip')}
            parentWidth={Dimensions.get('window').width - 40}
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
          {/* <View style={{ paddingHorizontal: 15 }}>
          <Divider />
        </View>
        <View style={styles.wrapOption}>
          <View style={[styles.option, { justifyContent: 'space-between' }]}>
            <View style={styles.option}>
              <RadioButton
                value="first"
                status={'checked'}
                onPress={() => console.log('2323')}
              />
              <Text>Dịch vụ cơ bản</Text>
            </View>
            <Text style={styles.priceText}>VND 567.000</Text>
          </View>
          <View style={[styles.option, { justifyContent: 'space-between' }]}>
            <View style={styles.option}>
              <RadioButton
                value="first"
                status={'checked'}
                onPress={() => console.log('2323')}
              />
              <Text>Dịch vụ nâng cao</Text>
            </View>
            <Text style={styles.priceText}>VND 567.000</Text>
          </View>
        </View> */}
        </View>
      </TouchableOpacity>
    );
  }, [onClick]);

  const cardItem = useMemo(() => {
    return (
      <TouchableOpacity onPress={() => onClick('Nor')}>
        <View style={{ backgroundColor: '#fff', borderRadius: 5 }}>
          <SliderBox
            images={images}
            sliderBoxHeight={150}
            onCurrentImagePressed={() => onClick('Nor')}
            parentWidth={Dimensions.get('window').width - 40}
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
          {/* <View style={{ paddingHorizontal: 15 }}>
          <Divider />
        </View>
        <View style={styles.wrapOption}>
          <View style={[styles.option, { justifyContent: 'space-between' }]}>
            <View style={styles.option}>
              <RadioButton
                value="first"
                status={'checked'}
                onPress={() => console.log('2323')}
              />
              <Text>Dịch vụ cơ bản</Text>
            </View>
            <Text style={styles.priceText}>VND 567.000</Text>
          </View>
          <View style={[styles.option, { justifyContent: 'space-between' }]}>
            <View style={styles.option}>
              <RadioButton
                value="first"
                status={'checked'}
                onPress={() => console.log('2323')}
              />
              <Text>Dịch vụ nâng cao</Text>
            </View>
            <Text style={styles.priceText}>VND 567.000</Text>
          </View>
        </View> */}
        </View>
      </TouchableOpacity>
    );
  }, [onClick]);

  return (
    <View
      style={{
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        {cardItemVip}
        {cardItem}
      </View>

      <View>
        <View style={styles.card}>
          <View
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#000' }}>
              Đã chọn
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '600', color: '#000' }}>
              {typeRoom}
            </Text>
          </View>
        </View>
        <Button
          title={'Thanh toán'}
          onPress={() =>
            navigate('PaymentHotel' as never, { ...params, typeRoom: typeRoom })
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
