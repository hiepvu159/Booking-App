/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import { createStackNavigator } from '@react-navigation/stack';
import BottomNav from './BottomNav';
import HomeScreen from '../screen/home';
import ListPlane from '../screen/list-airplane';
import InputInfomation from '../screen/input-information';
import { StyleSheet, Text, View } from 'react-native';
import ArrowRightIconSVG from '../../assets/svg/ArrowRightIconSVG';

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
