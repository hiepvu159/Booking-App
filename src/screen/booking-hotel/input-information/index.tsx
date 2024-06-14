/* eslint-disable react-native/no-inline-styles */
import React, { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import EmailIconSVG from '../../../../assets/svg/EmailIconSVG';
import ArrowRightForItemIconSVG from '../../../../assets/svg/ArrowRightForItem';
import { Button } from '@rneui/themed';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import CardDetailHotel from '../card-detail-hotel';
import ModalFullScreen from '../../../components/modal-fullscreen';
import ArrowRightIconSVG from '../../../../assets/svg/ArrowRightIconSVG';
import InfoContactHotel from '../InfoContact';
import {
  REGEXP_INPUT_PHONE_NUMBER,
  REGEXP_VALIDATE_EMAIL,
  defaultValues,
} from '../../booking-plane/input-information';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { RootStackParamList } from '../../../navigations/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';
import { isEqual } from 'lodash';

export default function InputInfomationHotel() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'InfoHotel'>>();
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isOpen, setIsOpen] = useState(false);
  const [formValue, setFormValue] = useState(defaultValues);

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

  const onCloseModal = useCallback(() => {
    setIsOpen(false);
  }, []);

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
              Thông tin người nhận
            </Text>
          </View>
        </View>
      </View>
    );
  }, [onCloseModal]);

  return (
    <View
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
      <View style={styles.wrap}>
        <View style={{ padding: 20 }}>
          <CardDetailHotel />
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            marginTop: 20,
          }}>
          <View>
            <View style={{ marginBottom: 20 }}>
              <View style={{ marginBottom: 10, paddingHorizontal: 10 }}>
                <Text style={styles.header}>Thông tin liên hệ</Text>
              </View>

              <View
                style={[
                  styles.card,
                  {
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  },
                ]}
                onTouchEnd={() => setIsOpen(true)}>
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
            </View>
          </View>
        </View>
      </View>
      <Button
        disabled={isEqual(defaultValues, formValue)}
        title={'Tiếp tục'}
        onPress={() =>
          navigate('PaymentHotel', {
            data: params.data,
            roomNor: params.roomNor,
            roomVip: params.roomVip,
            userContact: formValue,
            valueRoom: params.valueRoom,
          })
        }
      />
      <ModalFullScreen
        header={headerModal}
        content={
          <InfoContactHotel
            control={control}
            onSubmit={handleSubmit((value) => {
              setFormValue(value);
              setIsOpen(false);
            })}
          />
        }
        isOpen={isOpen}
        onClose={onCloseModal}
      />
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
