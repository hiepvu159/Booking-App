/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import CardDetailPlane from '../../../components/card-detail-plane';
import EmailIconSVG from '../../../../assets/svg/EmailIconSVG';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import UserIconSVG from '../../../../assets/svg/UserIconSVG';
import SeatAirPlaneIconSVG from '../../../../assets/svg/SeatAirPlaneIconSVG';
import BagIconSVG from '../../../../assets/svg/BagIconSVG';
import { Button } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';

const airPlaneOptionals = [
  {
    id: 1,
    icon: <BagIconSVG />,
    title: 'Hành lý',
    price: '90.000',
    description: 'Một số chuyến bay đã có hành lý. Chạm để xem thêm',
  },
  {
    id: 2,
    icon: <SeatAirPlaneIconSVG />,
    title: 'Số ghế',
    price: '90.000',
    description:
      'Cửa sổ hay lối đi? Chọn chỗ ngồi tốt nhất giúp bạn thoải mái trong suốt chuyến đi.',
  },
  {
    id: 3,
    icon: <BagIconSVG />,
    title: 'Hành lý xách tay bổ sung',
    price: '90.000',
    description:
      '7kg hành lý xách tay đã đủ đổi với bạn? Nếu chưa, bạn có thể nhấn vào để mua thêm',
  },
];
export default function InputInfomation() {
  const { params } = useRoute();
  const { navigate } = useNavigation();
  return (
    // <ScrollView
    //   style={{
    //     backgroundColor: '#E8EBEE',
    //   }}>
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        height: '100%',
      }}>
      <View>
        <View style={styles.wrap}>
          <View style={{ padding: 20 }}>
            <CardDetailPlane />
          </View>
        </View>
        <View style={{ paddingHorizontal: 10 }}>
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
            <TouchableOpacity
              onPress={() => navigate('InfoContactPlane' as never)}>
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
            </TouchableOpacity>
          </View>
          <View style={{ marginBottom: 20 }}>
            <View style={{ paddingHorizontal: 10 }}>
              <Text style={styles.header}>Thông tin khách hàng</Text>
            </View>
            <TouchableOpacity onPress={() => navigate('InfoCustomer' as never)}>
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
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Button
        title={'Tiếp tục'}
        onPress={() => navigate('PaymentPlane' as never, params)}
      />
    </View>
    // </ScrollView>
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
