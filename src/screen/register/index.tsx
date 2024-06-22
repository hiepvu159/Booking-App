/* eslint-disable react-native/no-inline-styles */
import React, { useCallback } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@rneui/themed';
import { LoginParams, registerAPI } from '../../api/user.api';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/Navigation';
const defaultValues = {
  name: '',
  password: '',
  confirmPassword: '',
};

export default function RegisterScreen() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[A-Za-z0-9]{8,20}$/,
        'Tên người dùng chỉ sử dụng chữ, độ dài từ 8 đến 20 kí tự',
      )
      .trim()
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin'),
    password: yup
      .string()
      .matches(
        /^[a-zA-Z0-9\d]{8,20}$/,
        'Mật khẩu dài ít nhất 8 kí tự, tối đa 20 kí tự, chỉ bao gồm chữ và số ',
      )
      .trim()
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin'),
    confirmPassword: yup
      .string()
      .trim()
      .matches(
        /^[a-zA-Z0-9\d]{8,20}$/,
        'Mật khẩu dài ít nhất 8 kí tự, tối đa 20 kí tự, chỉ bao gồm chữ và số ',
      )
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin')
      .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp'),
  });

  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (value: LoginParams) => {
      registerAPI({
        name: value.name,
        password: value.password,
      }).then(() => {
        navigate('login');
      });
    },
    [navigate],
  );

  return (
    <View style={{ paddingVertical: 150 }}>
      <Text
        style={{
          fontSize: 30,
          marginBottom: 100,
          textAlign: 'center',
          color: '#3871CB',
          letterSpacing: 15,
          fontFamily: 'lucida grande',
        }}>
        VIETTRAVEL
      </Text>
      <View style={styles.container}>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <Text style={{ fontSize: 26, marginBottom: 20 }}>Đăng nhập</Text>
          <Controller
            name="name"
            control={control}
            render={({ fieldState, field }) => (
              <Input
                placeholder="Tên đăng nhập"
                inputStyle={styles.inputStyle}
                errorMessage={fieldState?.error?.message}
                errorStyle={{
                  color: !fieldState?.error?.message ? '#9BA5AE' : 'red',
                }}
                onChange={(e) => {
                  field.onChange(e.nativeEvent.text);
                }}
                value={field.value}
                containerStyle={{ width: '70%' }}
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ fieldState, field }) => (
              <Input
                secureTextEntry={true}
                placeholder="Mật khẩu"
                inputStyle={styles.inputStyle}
                errorMessage={fieldState?.error?.message}
                errorStyle={{
                  color: !fieldState?.error?.message ? '#9BA5AE' : 'red',
                }}
                onChange={(e) => {
                  field.onChange(e.nativeEvent.text);
                }}
                value={field.value}
                containerStyle={{ width: '70%' }}
              />
            )}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ fieldState, field }) => (
              <Input
                secureTextEntry={true}
                placeholder="Xác nhận mật khẩu"
                inputStyle={styles.inputStyle}
                errorMessage={fieldState?.error?.message}
                errorStyle={{
                  color: !fieldState?.error?.message ? '#9BA5AE' : 'red',
                }}
                onChange={(e) => {
                  field.onChange(e.nativeEvent.text);
                }}
                value={field.value}
                containerStyle={{ width: '70%' }}
              />
            )}
          />
          <Button
            title={'Lưu'}
            color={'#F4601F'}
            containerStyle={styles.btn}
            onPress={handleSubmit(onSubmit, (err) => {
              console.log(err);
            })}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 10,
            justifyContent: 'center',
          }}>
          <Text>Quay lại</Text>
          <TouchableOpacity onPress={() => navigate('login')}>
            <Text style={{ color: '#5B9EDE' }}> Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
  },
  inputStyle: { fontSize: 13, maxWidth: '60%' },
  btn: {
    padding: 10,
    width: '50%',
  },
});
