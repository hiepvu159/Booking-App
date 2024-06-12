/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardPaymentPlane from '../../../components/card-payment-plane';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import WalletIconSVG from '../../../../assets/svg/WalletIconSVG';
import { Button, Divider } from '@rneui/themed';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/Navigation';
import { paymentTicketPlane } from '../../../api/booking-plane.api';

export default function PaymentPlane() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PaymentPlane'>>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePayment = useCallback(() => {
    paymentTicketPlane({
      contact_with_name: `${params.userContact.firstName} ${params.userContact.lastName}`,
      user_id: 123124,
      flight_id: params.data.id,
      contact_with_phone: params.userContact.phoneNumber,
      seat_basic_number: params.seatBasicCount,
      seat_vip_number: params.seatVipCount,
    })
      .then(() => {
        console.log('success');
      })
      .catch((err) => console.log(err));
  }, [params]);

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
        <CardPaymentPlane />
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
                Phương thức thanh toán: Visa{' '}
                <Text style={{ color: 'red' }}>*</Text>
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
              <View style={styles.formatPrice}>
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
                  VND{' '}
                  {(
                    params.seatVipCount * params.data.seat_vip_value +
                    params.seatBasicCount * params.data.seat_basic_value
                  ).toLocaleString('en-us')}
                </Text>
              </View>
              <Divider />

              <View style={[styles.formatPrice, { marginTop: 10 }]}>
                <Text
                  style={[
                    styles.fontSize14,
                    { fontWeight: '600', marginLeft: 10 },
                  ]}>
                  Giá vé VIP:
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
                  VND{' '}
                  {(
                    params.seatVipCount * params.data.seat_vip_value
                  ).toLocaleString('en-us')}
                </Text>
              </View>
              <View style={styles.formatPrice}>
                <Text
                  style={[
                    styles.fontSize14,
                    { fontWeight: '600', marginLeft: 10 },
                  ]}>
                  Giá vé thường:
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
                  VND{' '}
                  {(
                    params.seatBasicCount * params.data.seat_basic_value
                  ).toLocaleString('en-us')}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <Button title={'Thanh Toán'} onPress={handlePayment} />
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
  formatPrice: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
});
