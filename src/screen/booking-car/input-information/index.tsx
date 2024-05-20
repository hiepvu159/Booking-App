/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EmailIconSVG from '../../../../assets/svg/EmailIconSVG';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import UserIconSVG from '../../../../assets/svg/UserIconSVG';
import { Button } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';
import CardDetailCar from '../card-detail-car';

export default function InputInfomationCar() {
  const { navigate } = useNavigation();
  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={styles.wrap}>
        <View style={{ padding: 20 }}>
          <CardDetailCar />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <View>
            <View style={{ marginBottom: 20 }}>
              <View style={{ marginBottom: 20, paddingHorizontal: 10 }}>
                <Text style={styles.header}>
                  Thông tin liên hệ (nhận vé/phiếu thanh toán)
                </Text>
                <Text
                  style={[
                    styles.fontSize14,
                    { lineHeight: 20, fontWeight: '500' },
                  ]}>
                  Chúng tôi sẽ gửi tất cả các vé được mua theo hình thức online
                  đến phương thức liên hệ của bạn
                </Text>
              </View>

              <View
                style={[
                  styles.card,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                ]}
                onTouchEnd={() => navigate('InfoContactCar' as never)}>
                <View
                  style={[
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <EmailIconSVG color="#707173" />
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10 },
                    ]}>
                    Điền thông tin liên hệ{' '}
                    <Text style={{ color: 'red' }}>*</Text>
                  </Text>
                </View>
                <ArrowRightForItemIconSVG color="#2571E8" />
              </View>
            </View>
            <View style={{ marginBottom: 20 }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.header}>Thông tin khách hàng</Text>
              </View>
              <View
                style={[
                  styles.card,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                ]}
                onTouchStart={() => navigate('InfoCustomerCar' as never)}>
                <View
                  style={[
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                    },
                  ]}>
                  <UserIconSVG color="#707173" />
                  <Text
                    style={[
                      styles.fontSize14,
                      { fontWeight: '600', marginLeft: 10 },
                    ]}>
                    Người lớn 1 <Text style={{ color: 'red' }}>*</Text>
                  </Text>
                </View>
                <ArrowRightForItemIconSVG color="#2571E8" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Button
        title={'Tiếp tục'}
        onPress={() => navigate('PaymentCar' as never)}
      />
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
