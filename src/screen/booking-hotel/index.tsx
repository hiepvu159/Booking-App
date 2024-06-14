import { Button, Card, Input } from '@rneui/themed';
import React, { useCallback, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import CarIconSVG from '../../../assets/svg/CarIconSVG';
import { useNavigation } from '@react-navigation/native';
import ModalSelect from '../../components/modal-select/indext';
import { LIST_ADDRESS } from '../../constant/constant';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigations/Navigation';

export default function BookingHotelScreen() {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [isOpen, setIsOpen] = useState(false);
  const [valueAddress, setValueAddress] = useState('');
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <View style={styles.wrapHeader}>
      <ScrollView>
        <Card containerStyle={styles.card}>
          <Input
            label="Địa điểm"
            leftIcon={<CarIconSVG />}
            placeholder="Vui lòng chọn địa điểm"
            onTouchStart={handleFocus}
            showSoftInputOnFocus={false}
            value={valueAddress}
          />

          {/* <DatePicker
            modal
            mode="date"
            locale="vie"
            open={isOpenModalDate}
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
            onTouchStart={() => setIsOpenModalDate((prev) => !prev)}
            showSoftInputOnFocus={false}
          /> */}

          <Button
            disabled={!valueAddress}
            title={'Tìm kiếm'}
            buttonStyle={styles.btnSearch}
            onPress={() =>
              navigate('ListHotel', {
                addressFrom: valueAddress,
                // dateFrom: moment(dateFrom).format(FORMAT_DATE).toString(),
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
