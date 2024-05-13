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

const FORMAT_DATE = 'DD-MM-YYYY';

export default function BookingPlane() {
  const { navigate } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [dateFrom, setDateFrom] = useState(new Date());
  const [dateTo, setDateTo] = useState(new Date());
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
            label="Từ"
            leftIcon={<PlaneUpIconSVG />}
            placeholder="Vui lòng chọn sân bay đi"
            onTouchStart={() => handleFocus('from')}
            showSoftInputOnFocus={false}
          />
          <Input
            label="Đến"
            leftIcon={<PlanDownIconSVG />}
            onTouchStart={() => handleFocus('to')}
            showSoftInputOnFocus={false}
            placeholder="Vui lòng chọn sân bay đến"
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

          <View style={styles.wrapInput}>
            <Input
              label="Hành khách"
              keyboardType="decimal-pad"
              defaultValue="1"
            />
            <Input
              label="Hạng ghế"
              onTouchStart={() => handleFocus('from')}
              showSoftInputOnFocus={false}
            />
          </View>
          <Button
            title={'Tìm kiếm'}
            buttonStyle={styles.btnSearch}
            onPress={() => navigate('ListPlane' as never)}
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
