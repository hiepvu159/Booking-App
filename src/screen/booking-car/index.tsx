import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import ModalSelect from '../../components/modal-select/indext';
import { Button, Card, Input } from '@rneui/themed';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import { FORMAT_DATE } from '../booking-plane';
import moment from 'moment';
import CalendarIconSVG from '../../../assets/svg/CalendarIconSVG';
import CarIconSVG from '../../../assets/svg/CarIconSVG';
import { LIST_ADDRESS } from '../../constant/constant';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/Navigation';

export default function BookingCarScreen() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isOpen, setIsOpen] = useState({
    from: false,
    to: false,
  });
  const [valueAddress, setValueAddress] = useState('');
  const [dateFrom, setDateFrom] = useState(new Date());
  const [isOpenModalDate, setIsOpenModalDate] = useState({
    dateFrom: false,
    dateTo: false,
  });
  const [valueAddressFrom, setValueAddressFrom] = useState('');
  const [numberCustomer, setNumberCustomer] = useState(1);
  const [valueAddressTo, setValueAddressTo] = useState('');
  const onClose = useCallback(() => {
    setIsOpen({
      from: false,
      to: false,
    });
  }, []);

  const handleFocus = useCallback((value) => {
    setIsOpen((prev) => ({
      ...prev,
      [value]: true,
    }));
  }, []);

  const handleCloseModalDateFrom = useCallback(() => {
    setIsOpenModalDate((prev) => ({
      ...prev,
      dateFrom: false,
    }));
  }, []);

  const handleSubmit = useCallback(
    (value) => {
      if (isOpen.from) {
        return setValueAddressFrom(value);
      }
      return setValueAddressTo(value);
    },
    [isOpen],
  );

  return (
    <View style={styles.wrapHeader}>
      <ScrollView>
        <Card containerStyle={styles.card}>
          <Input
            label="Từ"
            leftIcon={<CarIconSVG />}
            placeholder="Vui lòng chọn điểm đi"
            onTouchStart={() => handleFocus('from')}
            showSoftInputOnFocus={false}
            value={valueAddressFrom}
          />
          <Input
            label="Đến"
            leftIcon={<CarIconSVG />}
            onTouchStart={() => handleFocus('to')}
            showSoftInputOnFocus={false}
            placeholder="Vui lòng chọn điểm đến"
            value={valueAddressTo}
          />
          <DatePicker
            modal
            mode="date"
            locale="vie"
            open={isOpenModalDate.dateFrom}
            date={dateFrom}
            onCancel={handleCloseModalDateFrom}
            onConfirm={(e) => {
              setDateFrom(e);
              handleCloseModalDateFrom();
            }}
            title={'Ngày khởi hành'}
            confirmText="Xác nhận"
            cancelText="Quay lại"
          />
          <Input
            value={moment(dateFrom).format(FORMAT_DATE).toString()}
            label="Ngày khởi hành"
            leftIcon={<CalendarIconSVG />}
            placeholder="Vui lòng chọn ngày khởi hành"
            onTouchStart={() =>
              setIsOpenModalDate((prev) => ({
                ...prev,
                dateFrom: true,
              }))
            }
            showSoftInputOnFocus={false}
          />

          <Input
            label="Số ghế"
            keyboardType="decimal-pad"
            defaultValue="1"
            onChangeText={(e) => setNumberCustomer(Number(e))}
          />
          <Button
            title={'Tìm kiếm'}
            buttonStyle={styles.btnSearch}
            onPress={() =>
              navigate('ListCar', {
                addressFrom: valueAddressFrom,
                addressTo: valueAddressTo,
                dateFrom: moment(dateFrom).format(FORMAT_DATE).toString(),
                numberCustomer: numberCustomer,
              })
            }
          />
        </Card>
      </ScrollView>
      <ModalSelect
        isOpen={isOpen.from || isOpen.to}
        onClose={onClose}
        onSubmit={handleSubmit}
        data={LIST_ADDRESS}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapHeader: {
    height: '100%',
    overflow: 'scroll',
  },
  card: {
    borderRadius: 10,
  },
  wrapInput: {
    maxWidth: 175,
    display: 'flex',
    flexDirection: 'row',
  },
  btnSearch: {
    backgroundColor: '#F4601F',
    padding: 10,
    borderRadius: 5,
  },
});
