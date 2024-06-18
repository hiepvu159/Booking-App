/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { RootStackParamList } from '../../navigations/Navigation';
import ArrowRightForItemIconSVG from '../../../assets/svg/ArrowRightForItem';
import { logoutAPI } from '../../api/user.api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserScreen() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: '#000' }}>Xin chào người dùng</Text>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 15, color: '#000' }}>
          Tính năng người dùng
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigate('TicketPlane');
          }}>
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
              {/* <EmailIconSVG color="#707173" /> */}
              <Text
                style={[{ fontWeight: '600', marginLeft: 10, fontSize: 14 }]}>
                Xem vé máy bay đã mua
              </Text>
            </View>
            <ArrowRightForItemIconSVG color="#2571E8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('TicketCar');
          }}>
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
              {/* <EmailIconSVG color="#707173" /> */}
              <Text
                style={[{ fontWeight: '600', marginLeft: 10, fontSize: 14 }]}>
                Xem vé xe khách đã mua
              </Text>
            </View>
            <ArrowRightForItemIconSVG color="#2571E8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigate('TicketHotel');
          }}>
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
              {/* <EmailIconSVG color="#707173" /> */}
              <Text
                style={[{ fontWeight: '600', marginLeft: 10, fontSize: 14 }]}>
                Xem khách sạn đã đặt
              </Text>
            </View>
            <ArrowRightForItemIconSVG color="#2571E8" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            logoutAPI().then(() => {
              AsyncStorage.removeItem('token');
              navigate('login');
            });
          }}>
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
              {/* <EmailIconSVG color="#707173" /> */}
              <Text
                style={[{ fontWeight: '600', marginLeft: 10, fontSize: 14 }]}>
                Đăng xuất
              </Text>
            </View>
            <ArrowRightForItemIconSVG color="#2571E8" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: 'black',
    marginVertical: 10,
  },
});
