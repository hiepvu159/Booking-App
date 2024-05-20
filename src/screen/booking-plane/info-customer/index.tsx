/* eslint-disable react-native/no-inline-styles */
import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { FORMAT_DATE } from '..';
import moment from 'moment';

export default function InfoCustomer() {
  const [isOpen, setIsOpen] = useState({
    dob: false,
    expiredDate: false,
  });
  const [dob, setDob] = useState(new Date());

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
          label="Họ"
          placeholder="Họ (vd: Nguyen)"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
          errorMessage="như trên CMND (không dấu)"
          errorStyle={{ color: 1 === 1 ? '#9BA5AE' : 'red' }}
        />
        <Input
          label="Tên"
          placeholder="Tên Đệm & Tên (vd: Thi Ngoc Anh)"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
          errorMessage="như trên CMND (không dấu)"
          errorStyle={{ color: 1 === 1 ? '#9BA5AE' : 'red' }}
          inputContainerStyle={{}}
        />
        <DatePicker
          modal
          mode="date"
          locale="vie"
          open={isOpen.dob}
          date={dob}
          onCancel={() =>
            setIsOpen((prev) => ({
              ...prev,
              dob: false,
            }))
          }
          onConfirm={(e) => {
            setDob(e);
            setIsOpen((prev) => ({
              ...prev,
              dob: false,
            }));
          }}
          title={'Ngày khởi hành'}
          confirmText="Xác nhận"
          cancelText="Quay lại"
        />
        <Input
          value={moment(dob).format(FORMAT_DATE).toString()}
          label="Ngày sinh"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={{ fontSize: 14 }}
          placeholder="Vui lòng chọn ngày khởi hành"
          onTouchStart={() =>
            setIsOpen((prev) => ({
              ...prev,
              dob: true,
            }))
          }
          showSoftInputOnFocus={false}
        />
        <Input
          label="Quốc tịch"
          placeholder="Vui lòng chọn quốc tịch"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
        />
        <Input
          label="Quốc tịch"
          placeholder="Vui lòng chọn quốc tịch"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
        />
        <Input
          label="Quốc tịch"
          placeholder="Vui lòng chọn quốc tịch"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={styles.inputStyle}
        />
        <DatePicker
          modal
          mode="date"
          locale="vie"
          open={isOpen.expiredDate}
          date={dob}
          onCancel={() =>
            setIsOpen((prev) => ({
              ...prev,
              expiredDate: false,
            }))
          }
          onConfirm={(e) => {
            setDob(e);
            setIsOpen((prev) => ({
              ...prev,
              expiredDate: false,
            }));
          }}
          title={'Ngày khởi hành'}
          confirmText="Xác nhận"
          cancelText="Quay lại"
        />
        <Input
          value={moment(dob).format(FORMAT_DATE).toString()}
          label="Ngày hết hạn"
          labelStyle={{ fontSize: 13, fontWeight: '400' }}
          inputStyle={{ fontSize: 14 }}
          placeholder="Vui lòng chọn ngày khởi hành"
          onTouchStart={() =>
            setIsOpen((prev) => ({
              ...prev,
              expiredDate: false,
            }))
          }
          showSoftInputOnFocus={false}
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
