import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  useEffect(() => {
    const handle = async () => {
      return await AsyncStorage.getItem('hehe');
    };
    const token = handle();
    console.log('🚀 ~ useEffect ~ hehe:', token);
  }, []);
  return (
    <View>
      <Text>hello world</Text>
    </View>
  );
}
