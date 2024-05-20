/* eslint-disable react-native/no-inline-styles */
import { Button, Input } from '@rneui/themed';
import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoIconSVG from '../../../../assets/svg/InfoIconSVG';

export default function InfoContact() {
  const formInfo = useMemo(() => {
    return (
      <View
        style={{
          paddingHorizontal: 10,
          paddingVertical: 20,
          backgroundColor: '#fff',
        }}>
        <Input
          placeholder="Họ (vd: Nguyen)"
          inputStyle={styles.inputStyle}
          errorMessage="như trên CMND (không dấu)"
          errorStyle={{ color: 1 === 1 ? '#9BA5AE' : 'red' }}
        />
        <Input
          placeholder="Tên Đệm & tên (vd: Thi Ngoc Anh)"
          inputStyle={styles.inputStyle}
          errorMessage="như trên CMND (không dấu)"
          errorStyle={{ color: 1 === 1 ? '#9BA5AE' : 'red' }}
          inputContainerStyle={{}}
        />
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            marginTop: 10,
          }}>
          <Input
            label="Mã quốc gia"
            containerStyle={{ width: 130 }}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelInput}
          />
          <Input
            label="Điện thoại di động"
            containerStyle={{ width: 260 }}
            inputContainerStyle={styles.inputContainerStyle}
            inputStyle={styles.inputStyle}
            labelStyle={styles.labelInput}
          />
        </View>
        <Input
          placeholder="Email"
          inputStyle={styles.inputStyle}
          errorMessage="VD: email@example.com"
          errorStyle={{ color: 1 === 1 ? '#9BA5AE' : 'red' }}
        />
      </View>
    );
  }, []);
  return (
    <View>
      {formInfo}
      <View style={{ padding: 15 }}>
        <View
          style={{
            padding: 10,
            borderColor: '#819EBD',
            borderWidth: 1.5,
            borderRadius: 5,
            backgroundColor: '#F4FDFE',
            display: 'flex',
            flexDirection: 'row',
            alignContent: 'flex-start',
            alignItems: 'flex-start',
            marginBottom: 20,
          }}>
          <InfoIconSVG color="#3871CB" />
          <Text
            style={{
              color: '#000',
              lineHeight: 22,
              marginLeft: 10,
              width: 340,
            }}>
            Thông tin liên hệ bên trên sẽ được sử dụng để nhận xác nhận đặt chỗ,
            hoàn tiền hoặc đổi lịch bay.
          </Text>
        </View>
        <Button title={'Lưu'} color={'#F4601F'} />
      </View>
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
  inputStyle: { fontSize: 13 },
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
