/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from '@rneui/themed';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../navigations/Navigation';

export default function UserScreen() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <View>
      <View style={styles.wrapHeader}>
        <Text style={{ color: '#fff', fontSize: 15 }}>
          Đăng ký thành viên, hưởng nhiều ưu đãi!
        </Text>
        <Button
          title={'Đăng nhập/Đăng ký'}
          type="outline"
          buttonStyle={styles.btnLogin}
          containerStyle={{
            width: 400,
            padding: 10,
            marginTop: 10,
          }}
          titleStyle={{ color: '#fff', fontSize: 16, fontWeight: '600' }}
          size="lg"
          onPress={() => navigate('login')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    backgroundColor: '#5B9EDE',
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 10,
  },
  wrapInput: {
    maxWidth: 175,
    display: 'flex',
    flexDirection: 'row',
  },
  btnLogin: {
    borderRadius: 5,
    borderColor: '#fff',
    borderWidth: 1,
  },
});
