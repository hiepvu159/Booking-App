import { Button, Card, Input } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CarIconSVG from '../../../assets/svg/CarIconSVG';
import DatePicker from 'react-native-date-picker';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { FORMAT_DATE } from '../booking-plane';
import CalendarIconSVG from '../../../assets/svg/CalendarIconSVG';
import ModalSelect from '../../components/modal-select/indext';
import { LIST_ADDRESS } from '../../constant/constant';

export default function BookingHotelScreen() {
  const { navigate } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [valueAddress, setValueAddress] = useState('');
  const [data, setData] = useState();
  const [dateFrom, setDateFrom] = useState(moment().toDate());
  const [isOpenModalDate, setIsOpenModalDate] = useState({
    dateFrom: false,
    dateTo: false,
  });
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleFocus = useCallback((value) => {
    setIsOpen(true);
    setData(value);
  }, []);

  const handleCloseModalDateFrom = useCallback(() => {
    setIsOpenModalDate((prev) => ({
      ...prev,
      dateFrom: false,
    }));
  }, []);

  return (
    <View style={styles.wrapHeader}>
      <ScrollView>
        <Card containerStyle={styles.card}>
          <Input
            label="Địa điểm"
            leftIcon={<CarIconSVG />}
            placeholder="Vui lòng chọn địa điểm"
            onTouchStart={() => handleFocus('from')}
            showSoftInputOnFocus={false}
            value={valueAddress}
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
            title={'Ngày '}
            confirmText="Xác nhận"
            cancelText="Quay lại"
          />
          <Input
            value={moment(dateFrom).format(FORMAT_DATE).toString()}
            label="Ngày "
            leftIcon={<CalendarIconSVG />}
            placeholder="Vui lòng chọn ngày "
            onTouchStart={() =>
              setIsOpenModalDate((prev) => ({
                ...prev,
                dateFrom: true,
              }))
            }
            showSoftInputOnFocus={false}
          />

          <Button
            title={'Tìm kiếm'}
            buttonStyle={styles.btnSearch}
            onPress={() =>
              navigate('ListHotel' as never, {
                address: valueAddress,
                date: moment(dateFrom).format(FORMAT_DATE).toString(),
              })
            }
          />
        </Card>
      </ScrollView>
      <ModalSelect
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={(value) => {
          setValueAddress(value);
        }}
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
