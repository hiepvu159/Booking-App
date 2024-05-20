/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import HomeScreen from '../screen/home';
import ListPlane from '../screen/booking-plane/list-airplane';
import InputInfomation from '../screen/booking-plane/input-information';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../assets/svg/ArrowRightIconSVG';
import InfoContact from '../screen/booking-plane/InfoContact';
import InfoCustomer from '../screen/booking-plane/info-customer';
import PaymentPlane from '../screen/booking-plane/payment';
import ListCar from '../screen/booking-car/list-car';
import InputInfomationCar from '../screen/booking-car/input-information';
import InfoContactCar from '../screen/booking-car/InfoContact';
import InfoCustomerCar from '../screen/booking-car/info-customer';
import PaymentCar from '../screen/booking-car/payment';
import ListHotels from '../screen/booking-hotel/list-car';
import InputInfomationHotel from '../screen/booking-hotel/input-information';
import InfoContactHotel from '../screen/booking-hotel/InfoContact';
import InfoCustomerHotel from '../screen/booking-hotel/info-customer';
import PaymentHotel from '../screen/booking-hotel/payment';
import LoginScreen from '../screen/login';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomNav}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />

      {/* plane */}
      <Stack.Screen
        name="ListPlane"
        component={ListPlane}
        options={{
          headerTitle: () => {
            return (
              <View style={{ marginBottom: 15 }}>
                <View style={styles.wrapAddress}>
                  <Text style={styles.textTitle}>HaNoi (HAN)</Text>
                  <View>
                    <ArrowRightIconSVG color="#fff" />
                  </View>
                  <Text style={styles.textTitle}>Tokyo (TYOA)</Text>
                </View>
                <Text style={styles.text}>
                  CN, 28 thg 4 • 1 nguoi • Economy
                </Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          keyboardHandlingEnabled: true,
          headerTintColor: '#fff',
          headerStatusBarHeight: 20,
          headerLeftContainerStyle: {
            marginBottom: 15,
          },
        }}
      />
      <Stack.Screen
        name="InfoPlane"
        component={InputInfomation}
        options={{
          title: 'Điền thông tin',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="InfoContactPlane"
        component={InfoContact}
        options={{
          title: 'Thông tin liên hệ',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="InfoCustomer"
        component={InfoCustomer}
        options={{
          title: 'Thông tin khách hàng',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="PaymentPlane"
        component={PaymentPlane}
        options={{
          title: 'Xác nhận thanh toán',
          headerStyle: {
            backgroundColor: '#1B3B68',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* car */}

      <Stack.Screen
        name="ListCar"
        component={ListCar}
        options={{
          headerTitle: () => {
            return (
              <View style={{ marginBottom: 15 }}>
                <View style={styles.wrapAddress}>
                  <Text style={styles.textTitle}>HaNoi (HAN)</Text>
                  <View>
                    <ArrowRightIconSVG color="#fff" />
                  </View>
                  <Text style={styles.textTitle}>Tokyo (TYOA)</Text>
                </View>
                <Text style={styles.text}>CN, 28 thg 4 • 1 nguoi</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          keyboardHandlingEnabled: true,
          headerTintColor: '#fff',
          headerStatusBarHeight: 20,
          headerLeftContainerStyle: {
            marginBottom: 15,
          },
        }}
      />
      <Stack.Screen
        name="InfoCar"
        component={InputInfomationCar}
        options={{
          title: 'Điền thông tin',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="InfoContactCar"
        component={InfoContactCar}
        options={{
          title: 'Thông tin liên hệ',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="InfoCustomerCar"
        component={InfoCustomerCar}
        options={{
          title: 'Thông tin khách hàng',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="PaymentCar"
        component={PaymentCar}
        options={{
          title: 'Xác nhận thanh toán',
          headerStyle: {
            backgroundColor: '#1B3B68',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      {/* Hotel */}
      <Stack.Screen
        name="ListHotel"
        component={ListHotels}
        options={{
          headerTitle: () => {
            return (
              <View style={{ marginBottom: 15 }}>
                <View style={styles.wrapAddress}>
                  <Text style={styles.textTitle}>HaNoi (HAN)</Text>
                  <View>
                    <ArrowRightIconSVG color="#fff" />
                  </View>
                  <Text style={styles.textTitle}>Tokyo (TYOA)</Text>
                </View>
                <Text style={styles.text}>CN, 28 thg 4 • 1 nguoi</Text>
              </View>
            );
          },
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          keyboardHandlingEnabled: true,
          headerTintColor: '#fff',
          headerStatusBarHeight: 20,
          headerLeftContainerStyle: {
            marginBottom: 15,
          },
        }}
      />
      <Stack.Screen
        name="InfoHotel"
        component={InputInfomationHotel}
        options={{
          title: 'Điền thông tin',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="InfoContactHotel"
        component={InfoContactHotel}
        options={{
          title: 'Thông tin liên hệ',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="InfoCustomerHotel"
        component={InfoCustomerHotel}
        options={{
          title: 'Thông tin khách hàng',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />

      <Stack.Screen
        name="PaymentHotel"
        component={PaymentHotel}
        options={{
          title: 'Xác nhận thanh toán',
          headerStyle: {
            backgroundColor: '#1B3B68',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* login */}
      <Stack.Screen name="login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  wrapAddress: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    color: '#fff',
  },
  textTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});
