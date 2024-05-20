/* eslint-disable react-native/no-inline-styles */
import { Button, Input } from '@rneui/themed';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function InfoCustomerHotel() {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        padding: 10,
      }}>
      <View>
        <Input
          label="Họ tên"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
          errorMessage="như trên CMND (không dấu)"
          errorStyle={{ color: 1 === 1 ? '#9BA5AE' : 'red' }}
        />
        <Input
          label="Danh Xưng"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
        />
      </View>
      <Button title={'Lưu'} color={'#F4601F'} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#5B9EDE',
    height: 75,
    paddingHorizontal: 20,
  },
  containerStyle: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: '#fff',
    borderRadius: 10,
    width: 280,
    height: 45,
    marginTop: 15,
  },
  inputStyle: { fontSize: 14 },
  inputContainerStyle: {
    height: 40,
    fontSize: 13,
  },
  wrapIcon: {
    height: '100%',
    width: 'auto',
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  notificaionIcon: {
    marginRight: 20,
  },
  labelInput: { fontSize: 13, fontWeight: '400' },
});
