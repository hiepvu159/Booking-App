/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import HomeScreen from '../screen/home';
import ListPlane from '../screen/booking-plane/list-airplane';
import InputInfomation from '../screen/booking-plane/input-information';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ArrowRightIconSVG from '../../assets/svg/ArrowRightIconSVG';
// import InfoContact from '../screen/booking-plane/InfoContact';
import InfoCustomer from '../screen/booking-plane/info-customer';
import PaymentPlane from '../screen/booking-plane/payment';
import ListCar from '../screen/booking-car/list-car';
import InputInfomationCar from '../screen/booking-car/input-information';
import InfoContactCar from '../screen/booking-car/InfoContact';
import InfoCustomerCar from '../screen/booking-car/info-customer';
import PaymentCar from '../screen/booking-car/payment';
import ListHotels from '../screen/booking-hotel/list-hotels';
import InputInfomationHotel from '../screen/booking-hotel/input-information';
import InfoContactHotel from '../screen/booking-hotel/InfoContact';
import InfoCustomerHotel from '../screen/booking-hotel/info-customer';
import PaymentHotel from '../screen/booking-hotel/payment';
import LoginScreen from '../screen/login';
import DetailHotel from '../screen/booking-hotel/detail-hotel';
import SelectRoom from '../screen/booking-hotel/SelectRoom';
import { useNavigation } from '@react-navigation/native';
import { PlaneModel, PlaneParams } from '../model/plane.model';
import { CarParams } from '../model/car.model';
import RegisterScreen from '../screen/register';

export type RootStackParamList = {
  ListCar: CarParams;
  BottomTabs: any;
  Home: any;
  ListPlane: PlaneParams;
  InfoPlane: { data: PlaneModel };
  PaymentPlane: {
    data: PlaneModel;
    seatBasicCount: number;
    seatVipCount: number;
    userContact: {
      lastName: string;
      firstName: string;
      phoneNumber: string;
      email: string;
    };
  };
  InfoContactPlane: any;
  InfoCustomer: any;
  InfoCar: any;
  InfoContactCar: any;
  InfoCustomerCar: any;
  PaymentCar: any;
  ListHotel: any;
  login: any;
  SelectRoom: any;
  DetailHotel: any;
  PaymentHotel: any;
  InfoCustomerHotel: any;
  InfoContactHotel: any;
  InfoHotel: any;
  Register: any;
};

const Stack = createStackNavigator<RootStackParamList>();
export default function Navigation() {
  const { goBack } = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
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
          header: ({ route: { params } }: any) => {
            return (
              <View
                style={{
                  marginBottom: 15,
                  backgroundColor: '#5B9EDE',
                  height: 75,
                  padding: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <View
                    style={{
                      transform: 'rotate(180deg)',
                      marginRight: 10,
                    }}>
                    <TouchableOpacity onPress={goBack}>
                      <ArrowRightIconSVG color="#fff" height="35" width="35" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={styles.wrapAddress}>
                      <Text style={styles.textTitle}>
                        {params?.addressFrom}
                      </Text>
                      <View>
                        <ArrowRightIconSVG color="#fff" />
                      </View>
                      <Text style={styles.textTitle}>{params?.addressTo}</Text>
                    </View>
                    <Text style={styles.text}>{params?.dateFrom}</Text>
                  </View>
                </View>
              </View>
            );
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
      {/* <Stack.Screen
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
      /> */}
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
          header: ({ route: { params } }: any) => {
            return (
              <View
                style={{
                  marginBottom: 15,
                  backgroundColor: '#5B9EDE',
                  height: 75,
                  padding: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <View
                    style={{ transform: 'rotate(180deg)', marginRight: 10 }}>
                    <TouchableOpacity onPress={goBack}>
                      <ArrowRightIconSVG color="#fff" height="35" width="35" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={styles.wrapAddress}>
                      <Text style={styles.textTitle}>
                        {params?.addressFrom}
                      </Text>
                      <View>
                        <ArrowRightIconSVG color="#fff" />
                      </View>
                      <Text style={styles.textTitle}>{params?.addressTo}</Text>
                    </View>
                    <Text style={styles.text}>
                      {params?.dateFrom} • {params?.numberCustomer} Ghế
                    </Text>
                  </View>
                </View>
              </View>
            );
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
          header: ({ route: { params } }: any) => {
            return (
              <View
                style={{
                  marginBottom: 15,
                  backgroundColor: '#5B9EDE',
                  height: 75,
                  padding: 10,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 8,
                  }}>
                  <View
                    style={{ transform: 'rotate(180deg)', marginRight: 10 }}>
                    <TouchableOpacity onPress={goBack}>
                      <ArrowRightIconSVG color="#fff" height="35" width="35" />
                    </TouchableOpacity>
                  </View>
                  <View>
                    <View style={styles.wrapAddress}>
                      <Text style={styles.textTitle}>{params?.address}</Text>
                    </View>
                    <Text style={styles.text}>{params?.date}</Text>
                  </View>
                </View>
              </View>
            );
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

      <Stack.Screen
        name="DetailHotel"
        component={DetailHotel}
        options={{
          title: 'Thông tin khách sạn',
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
        name="SelectRoom"
        component={SelectRoom}
        options={{
          title: 'Chọn loại phòng',
          headerStyle: {
            backgroundColor: '#5B9EDE',
          },
          headerTitleStyle: {
            color: '#fff',
          },
          headerTintColor: '#fff',
        }}
      />

      {/* login */}
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
