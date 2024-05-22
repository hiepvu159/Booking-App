/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import WalletIconSVG from '../../../../assets/svg/WalletIconSVG';
import { Button, Divider } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import CardPaymentCar from '../card-payment-hotel';

export default function PaymentHotel() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        paddingHorizontal: 10,
        paddingVertical: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
      }}>
      <View>
        <CardPaymentCar />
        <View style={{ marginTop: 10 }}>
          <View
            style={[
              styles.card,
              {
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              },
            ]}>
            <View
              style={[
                {
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                },
              ]}>
              <WalletIconSVG color="#707173" />
              <Text
                style={[
                  styles.fontSize14,
                  { fontWeight: '600', marginLeft: 10 },
                ]}>
                Phương thức thanh toán <Text style={{ color: 'red' }}>*</Text>
              </Text>
            </View>
            <ArrowRightForItemIconSVG color="#2571E8" />
          </View>
        </View>
      </View>
      <View>
        <View style={{ marginVertical: 10 }}>
          <View>
            <View style={[styles.card]}>
              <View
                style={[
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: 10,
                  },
                ]}>
                <Text
                  style={[
                    styles.fontSize14,
                    { fontWeight: '600', marginLeft: 10 },
                  ]}>
                  Tổng giá tiền
                </Text>
                <Text
                  style={[
                    styles.fontSize14,
                    {
                      fontWeight: '600',
                      marginLeft: 10,
                      color: '#000',
                      fontSize: 16,
                    },
                  ]}>
                  VND 5.164.200
                </Text>
              </View>
              <Divider />
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10, marginVertical: 5 },
                    ]}>
                    Bảo hiểm nhân thọ
                  </Text>
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10, marginVertical: 5 },
                    ]}>
                    VND 1.000.000
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10, marginVertical: 5 },
                    ]}>
                    Bảo hiểm nhân thọ
                  </Text>
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10, marginVertical: 5 },
                    ]}>
                    VND 1.000.000
                  </Text>
                </View>
              </View>
              <View style={{ marginTop: 10 }}>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10, marginVertical: 5 },
                    ]}>
                    Bảo hiểm nhân thọ
                  </Text>
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10, marginVertical: 5 },
                    ]}>
                    VND 1.000.000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Button
          title={'Thanh Toán'}
          onPress={() => navigate('BottomTabs' as never)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#5B9EDE',
    height: 180,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: 'black',
  },
  fontSize14: {
    fontSize: 15,
  },
  header: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    color: '#F4601F',
  },
});
