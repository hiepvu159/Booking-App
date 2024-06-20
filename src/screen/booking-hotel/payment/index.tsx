/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import WalletIconSVG from '../../../../assets/svg/WalletIconSVG';
import { Button, Divider } from '@rneui/themed';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import CardPaymentHotel from '../card-payment-hotel';
import { toastError, toastSuccess } from '../../../helper/toast.config';
import { paymentTicketHotel } from '../../../api/booking-hotel.api';

export default function PaymentHotel() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PaymentHotel'>>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePayment = useCallback(() => {
    paymentTicketHotel({
      contact_with_name: `${params.userContact.firstName} ${params.userContact.lastName}`,
      flight_id: params.data.id,
      contact_with_phone: params.userContact.phoneNumber,
      seat_basic_number: params.roomNor,
      seat_vip_number: params.roomVip,
    })
      .then(() => {
        toastSuccess('Thanh toán thành công');
        navigate('BottomTabs');
      })
      .catch(() => {
        toastError('Vui lòng thử lại');
      });
  }, [navigate, params]);

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
        <CardPaymentHotel />
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
                    params.roomNor * params.valueRoom.roomNor +
                    params.roomVip * params.valueRoom.roomVip
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
                  {(params.roomVip * params.valueRoom.roomVip).toLocaleString(
                    'en-us',
                  )}
                </Text>
              </View>
              <View style={styles.formatPrice}>
                <Text
                  style={[
                    styles.fontSize14,
                    { fontWeight: '600', marginLeft: 10 },
                  ]}>
                  Giá phòng thường:
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
                  {(params.roomNor * params.valueRoom.roomNor).toLocaleString(
                    'en-us',
                  )}
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
