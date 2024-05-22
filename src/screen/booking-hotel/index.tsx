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
import RoomIconSVG from '../../../assets/svg/RoomIconSVG';

export default function BookingHotelScreen() {
  const { navigate } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [dateFrom, setDateFrom] = useState(moment().toDate());
  const [dateTo, setDateTo] = useState(moment().add(1, 'day').toDate());
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

  const handleCloseModalDateTo = useCallback(() => {
    setIsOpenModalDate((prev) => ({
      ...prev,
      dateTo: false,
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

          <DatePicker
            modal
            mode="date"
            locale="vie"
            open={isOpenModalDate.dateTo}
            date={dateTo}
            onCancel={handleCloseModalDateTo}
            onConfirm={(e) => {
              setDateTo(e);
              handleCloseModalDateTo();
            }}
            title={'Ngày về'}
            confirmText="Xác nhận"
            cancelText="Quay lại"
          />
          <Input
            value={moment(dateTo).format('DD-MM-YYYY').toString()}
            label="Ngày về"
            leftIcon={<CalendarIconSVG />}
            placeholder="Vui lòng chọn ngày về"
            onTouchStart={() =>
              setIsOpenModalDate((prev) => ({
                ...prev,
                dateTo: true,
              }))
            }
            showSoftInputOnFocus={false}
          />
          <Input
            label="Loại phòng"
            leftIcon={<RoomIconSVG />}
            placeholder="Vui lòng chọn loại phòng"
            onTouchStart={() => handleFocus('from')}
            showSoftInputOnFocus={false}
          />
          <Button
            title={'Tìm kiếm'}
            buttonStyle={styles.btnSearch}
            onPress={() => navigate('ListHotel' as never)}
          />
        </Card>
      </ScrollView>
      <ModalSelect
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={() => {}}
        data={data}
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
