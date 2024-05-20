/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/home';
import Header from '../components/header/Header';
import BookingPlane from '../screen/booking-plane';
import UserScreen from '../screen/user';
import PlaneIconSVG from '../../assets/svg/PlaneIconSVG';
import BookingCarScreen from '../screen/booking-car';
import BookingHotelScreen from '../screen/booking-hotel';
import CarIconSVG from '../../assets/svg/CarIconSVG';
import HotelIconSVG from '../../assets/svg/HotelIconSVG';
import UserIconSVG from '../../assets/svg/UserIconSVG';
import HomeIConSVG from '../../assets/svg/HomeIconSVG';
import HeaderForSearch from '../components/header/HeaderForSearch';

const Tab = createBottomTabNavigator();

export default function BottomNav() {
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarHideOnKeyboard: true,
        // tabBarIcon: ({ focused, color, size }) => {
        //   // let iconName;
        //   // let rn = route.name;

        //   // if (rn === homeName) {
        //   //   iconName = focused ? 'home' : 'home-outline';
        //   // } else if (rn === searchName) {
        //   //   iconName = focused ? 'md-search' : 'md-search-outline';
        //   // } else if (rn === filterName) {
        //   //   iconName = focused ? 'list' : 'list-outline';
        //   // } else iconName = focused ? 'md-person' : 'md-person-outline';

        //   return <Ionicons name={'home'} size={size} color={color} />;
        // },
        tabBarLabelStyle: { paddingBottom: 5 },
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => <HomeIConSVG />,
          header: () => <Header />,
        }}
      />
      <Tab.Screen
        name="BookingPlane"
        component={BookingPlane}
        options={{
          tabBarLabel: 'Đặt vé máy bay',
          tabBarIcon: () => {
            return <PlaneIconSVG />;
          },
          header: () => <HeaderForSearch title="Chuyến bay" />,
        }}
      />
      <Tab.Screen
        name="BookingCar"
        component={BookingCarScreen}
        options={{
          tabBarLabel: 'Đặt vé xe khách',
          tabBarIcon: () => {
            return <CarIconSVG />;
          },

          header: () => <HeaderForSearch title="Xe khách" />,
        }}
      />
      <Tab.Screen
        name="BookingHotel"
        component={BookingHotelScreen}
        options={{
          tabBarLabel: 'Đặt vé phòng khách sạn',
          tabBarIcon: () => {
            return <HotelIconSVG />;
          },
          header: () => <HeaderForSearch title="Khách sạn" />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: 'Tài khoản',
          tabBarIcon: () => {
            return <UserIconSVG />;
          },
          header: () => <Header />,
        }}
      />
    </Tab.Navigator>
  );
}
