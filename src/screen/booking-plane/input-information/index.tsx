/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CardDetailPlane from '../../../components/card-detail-plane';
import EmailIconSVG from '../../../../assets/svg/EmailIconSVG';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import UserIconSVG from '../../../../assets/svg/UserIconSVG';

import { Button } from '@rneui/themed';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
// import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../../navigations/Navigation';
import ModalFullScreen from '../../../components/modal-fullscreen';
import ArrowRightIconSVG from '../../../../assets/svg/ArrowRightIconSVG';
import InputSpinner from 'react-native-input-spinner';
import InfoContact from '../InfoContact';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { StackNavigationProp } from '@react-navigation/stack';
import { isEqual } from 'lodash';

const defaultValues = {
  lastName: '',
  firstName: '',
  phoneNumber: '',
  email: '',
};
export const REGEXP_INPUT_PHONE_NUMBER: RegExp = /^\d[0-9]{9}$/;
export const REGEXP_VALIDATE_EMAIL: RegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default function InputInfomation() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'InfoPlane'>>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const schema = yup.object().shape({
    firstName: yup
      .string()
      .trim()
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin'),
    lastName: yup
      .string()
      .trim()
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin'),
    phoneNumber: yup
      .string()
      .trim()
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin')
      .test('phoneNumber', 'Số điện thoại không đúng', (value: string) =>
        REGEXP_INPUT_PHONE_NUMBER.test(value),
      ),
    email: yup
      .string()
      .trim()
      .nullable()
      .required('Vui lòng nhập đầy đủ thông tin')
      .test('email', 'Email không đúng. Vui lòng nhập lại', (value: string) =>
        REGEXP_VALIDATE_EMAIL.test(value),
      ),
  });
  const { control, handleSubmit } = useForm({
    mode: 'onChange',
    defaultValues: defaultValues,
    resolver: yupResolver(schema),
  });

  const [isOpen, setIsOpen] = useState({
    isCountModal: false,
    isInfoForm: false,
  });
  const [seatNor, setSeatNor] = useState(0);
  const [seatVip, setSeatVip] = useState(0);
  const [formValue, setFormValue] = useState(defaultValues);

  const onCloseModal = useCallback(() => {
    setIsOpen({
      isCountModal: false,
      isInfoForm: false,
    });
  }, []);

  const disabledBtn = useMemo(() => {
    return (
      (seatNor === 0 && seatVip === 0) || isEqual(defaultValues, formValue)
    );
  }, [formValue, seatNor, seatVip]);

  const headerModal = useMemo(() => {
    return (
      <View
        style={{
          marginBottom: 15,
          backgroundColor: '#5B9EDE',
          height: 60,
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
            <TouchableOpacity onPress={onCloseModal}>
              <ArrowRightIconSVG color="#fff" height="25" width="25" />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.text, styles.textTitle]}>
              {isOpen.isCountModal
                ? 'Số lượng hành khách'
                : 'Thông tin người nhận'}
            </Text>
          </View>
        </View>
      </View>
    );
  }, [isOpen, onCloseModal]);

  const contentModal = useMemo(() => {
    return (
      <View
        style={{
          paddingHorizontal: 10,
          display: 'flex',
          justifyContent: 'space-between',
          height: '90%',
        }}>
        <View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 10 }}>Số lượng ghế thường</Text>
            <InputSpinner
              max={params.data.seat_basic_empty}
              min={0}
              step={1}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              value={seatNor}
              onChange={(num: number) => {
                setSeatNor(num);
              }}
            />
          </View>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ marginBottom: 10 }}>Số lượng ghế VIP</Text>
            <InputSpinner
              max={params.data.seat_vip_empty}
              min={0}
              step={1}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              value={seatVip}
              onChange={(num: number) => {
                setSeatVip(num);
              }}
            />
          </View>
        </View>
        <Button
          title={'Tiếp tục'}
          disabled={seatNor === 0 && seatVip === 0}
          onPress={onCloseModal}
        />
      </View>
    );
  }, [onCloseModal, params, seatNor, seatVip]);

  return (
    <View>
      <View
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'column',
          height: '100%',
        }}>
        <View>
          <View style={styles.wrap}>
            <View style={{ padding: 20 }}>
              <CardDetailPlane />
            </View>
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <View style={{ marginBottom: 20 }}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text style={styles.header}>Số lượng hành khách</Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsOpen({ ...isOpen, isCountModal: true })}>
                <View
                  style={[
                    styles.card,
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <View
                    style={[
                      {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      },
                    ]}>
                    <UserIconSVG color="#707173" />
                    <Text
                      style={[
                        styles.fontSize14,
                        { fontWeight: '600', marginLeft: 10 },
                      ]}>
                      Chọn số lượng hành khách{' '}
                      <Text style={{ color: 'red' }}>*</Text>
                    </Text>
                  </View>
                  <ArrowRightForItemIconSVG color="#2571E8" />
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ marginBottom: 20 }}>
              <View style={{ marginBottom: 20, paddingHorizontal: 10 }}>
                <Text style={styles.header}>
                  Thông tin liên hệ (nhận vé/phiếu thanh toán)
                </Text>
                <Text
                  style={[
                    styles.fontSize14,
                    { lineHeight: 20, fontWeight: '500' },
                  ]}>
                  Chúng tôi sẽ gửi tất cả các vé được mua theo hình thức online
                  đến phương thức liên hệ của bạn
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => setIsOpen({ ...isOpen, isInfoForm: true })}>
                <View
                  style={[
                    styles.card,
                    {
                      display: 'flex',
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    },
                  ]}>
                  <View
                    style={[
                      {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      },
                    ]}>
                    <EmailIconSVG color="#707173" />
                    <Text
                      style={[
                        styles.fontSize14,
                        { fontWeight: '600', marginLeft: 10 },
                      ]}>
                      Điền thông tin liên hệ{' '}
                      <Text style={{ color: 'red' }}>*</Text>
                    </Text>
                  </View>
                  <ArrowRightForItemIconSVG color="#2571E8" />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Button
          disabled={disabledBtn}
          title={'Tiếp tục'}
          onPress={() => {
            navigate('PaymentPlane', {
              ...params,
              seatBasicCount: seatNor,
              seatVipCount: seatVip,
              userContact: formValue,
            });
          }}
        />
        <ModalFullScreen
          header={headerModal}
          content={
            isOpen.isCountModal ? (
              contentModal
            ) : (
              <InfoContact
                control={control}
                onSubmit={handleSubmit((value) => {
                  setFormValue(value);
                  setIsOpen({ isCountModal: false, isInfoForm: false });
                })}
              />
            )
          }
          isOpen={isOpen.isCountModal || isOpen.isInfoForm}
          onClose={onCloseModal}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: '#5B9EDE',
    height: 180,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    shadowColor: 'black',
  },
  fontSize14: {
    fontSize: 15,
  },
  header: {
    fontSize: 16,
    color: 'black',
    fontWeight: '700',
    marginVertical: 10,
  },
  price: {
    color: '#F4601F',
  },
  text: {
    color: '#fff',
  },
  textTitle: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});
