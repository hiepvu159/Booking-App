/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import WalletIconSVG from '../../../../assets/svg/WalletIconSVG';
import { Button } from '@rneui/themed';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import CardPaymentCar from '../card-payment-car';
import { paymentTicketCar } from '../../../api/booking-car.api';
import { RootStackParamList } from '../../../navigations/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { toastError, toastSuccess } from '../../../helper/toast.config';

export default function PaymentCar() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'PaymentCar'>>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handlePayment = useCallback(() => {
    paymentTicketCar({
      contact_with_name: `${params.userContact.firstName} ${params.userContact.lastName}`,
      car_travel_id: params.data.id,
      contact_with_phone: params.userContact.phoneNumber,
      seat_number: params.seatCount,
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
                  {(params.seatCount * params.data.seat_value).toLocaleString(
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
