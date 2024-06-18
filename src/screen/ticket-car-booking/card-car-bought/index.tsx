import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import moment from 'moment';
import { FORMAT_DATE } from '../../booking-plane';
import { TicketCarModal } from '../../../model/car.model';

interface Props {
  data: TicketCarModal;
}

export default function CardInfoTicketCar({ data }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>{data.name}</Text>
      <View style={styles.wrapInfo}>
        <Text>
          Thời gian khởi hành:{' '}
          <Text style={styles.textInfo}>
            {moment(data?.time).format(FORMAT_DATE)}
          </Text>
        </Text>
      </View>
      {/* <View style={styles.wrapInfo}>
        <Text>
          Thời gian dự kiến:{' '}
          <Text style={styles.textInfo}>
            {data.estimate_time} {data.estimate_unit}
          </Text>
        </Text>
      </View> */}
      <View style={styles.wrapInfo}>
        <Text>
          Xuất phát từ
          <Text style={styles.textInfo}> {data.start_location}</Text> đến
          <Text style={styles.textInfo}> {data.end_location}</Text>
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text>
          Số lượng ghế đã mua:{' '}
          <Text style={styles.textInfo}>{data.seat_number} ghế</Text>
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text>
          Tên người nhận:
          <Text style={styles.textInfo}> {data.contact_with_name}</Text>
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text>
          Số điện thoại người nhận:
          <Text style={styles.textInfo}> {data.contact_with_phone}</Text>
        </Text>
      </View>
      <View style={styles.wrapInfo}>
        <Text>
          Tổng tiền:
          <Text style={styles.textInfo}>
            {' '}
            {data.ticket_value.toLocaleString('en-us')} VND
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
  },
  wrapInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  textInfo: {
    color: 'black',
  },

  priceText: {
    color: '#F4601F',
  },
  priceWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
});
