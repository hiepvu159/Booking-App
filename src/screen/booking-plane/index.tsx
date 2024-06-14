import { Card } from '@rneui/base';
import { Button, Input } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import PlaneUpIconSVG from '../../../assets/svg/PlaneUpIconSVG';
import PlanDownIconSVG from '../../../assets/svg/PlanDownIconSVG';
import CalendarIconSVG from '../../../assets/svg/CalendarIconSVG';
import ModalSelect from '../../components/modal-select/indext';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import { useNavigation } from '@react-navigation/native';
import { LIST_ADDRESS } from '../../constant/constant';
import { RootStackParamList } from '../../navigations/Navigation';
import { StackNavigationProp } from '@react-navigation/stack';

export const FORMAT_DATE = 'DD-MM-YYYY';
export const FORMAT_TIME = 'HH:mm';

export default function BookingPlane() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isOpen, setIsOpen] = useState({
    from: false,
    to: false,
  });
  const [dateFrom, setDateFrom] = useState(new Date());
  const [valueAddressFrom, setValueAddressFrom] = useState('');
  const [valueAddressTo, setValueAddressTo] = useState('');
  // const [typeSeat, setTypeSeat] = useState('');
  // const [numberCustomer, setNumberCustomer] = useState(1);
  const [isOpenModalDate, setIsOpenModalDate] = useState({
    dateFrom: false,
    dateTo: false,
  });
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

  const handleSubmitModal = useCallback(
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
            leftIcon={<PlaneUpIconSVG />}
            placeholder="Vui lòng chọn sân bay đi"
            onTouchStart={() => handleFocus('from')}
            showSoftInputOnFocus={false}
            value={valueAddressFrom}
          />
          <Input
            label="Đến"
            leftIcon={<PlanDownIconSVG />}
            onTouchStart={() => handleFocus('to')}
            showSoftInputOnFocus={false}
            placeholder="Vui lòng chọn sân bay đến"
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

          {/* <View style={styles.wrapInput}>
            <Input
              label="Hành khách"
              keyboardType="decimal-pad"
              defaultValue="1"
              containerStyle={{ width: '50%' }}
              onChangeText={(e) => setNumberCustomer(Number(e))}
            />
            <View style={{ width: '50%' }}>
              <Text style={{ fontSize: 16, fontWeight: '600' }}>Hạng Ghế</Text>
              <Picker
                selectedValue={typeSeat}
                onValueChange={(itemValue) => {
                  setTypeSeat(itemValue);
                }}>
                <Picker.Item label="Thương gia" value="Thương gia" />
                <Picker.Item label="Bình dân" value="Bình dân" />
              </Picker>
            </View>
          </View> */}
          <Button
            title={'Tìm kiếm'}
            buttonStyle={styles.btnSearch}
            disabled={!valueAddressFrom || !valueAddressTo || !dateFrom}
            onPress={() => {
              navigate('ListPlane', {
                addressFrom: valueAddressFrom,
                addressTo: valueAddressTo,
                dateFrom: moment(dateFrom).toISOString(),
                // typeSeat: typeSeat,
                // numberCustomer: numberCustomer,
              });
            }}
          />
        </Card>
      </ScrollView>
      <ModalSelect
        isOpen={isOpen.from || isOpen.to}
        onClose={onClose}
        onSubmit={handleSubmitModal}
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
    display: 'flex',
    flexDirection: 'row',
  },
  btnSearch: {
    backgroundColor: '#F4601F',
    padding: 10,
    borderRadius: 5,
  },
});
