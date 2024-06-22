import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { RootStackParamList } from '../../navigations/Navigation';
import { PlaneModel } from '../../model/plane.model';
import { FORMAT_DATE } from '../../screen/booking-plane';
import moment from 'moment';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  data: PlaneModel;
}

export default function CardItem({ data }: Props) {
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => {
        navigate('InfoPlane', {
          data: data,
        });
      }}>
      <View style={styles.container}>
        <Text style={styles.textInfo}>
          {data.name} - {data.plane_name}
        </Text>
        <View style={styles.wrapInfo}>
          <Text>
            Thời gian khởi hành:{' '}
            <Text style={styles.textInfo}>
              {moment.unix(data?.start_time).format(FORMAT_DATE)}
            </Text>
          </Text>
        </View>
        <View style={styles.wrapInfo}>
          <Text>
            Thời gian dự kiến:{' '}
            <Text style={styles.textInfo}>
              {data.estimate_time} {data.estimate_unit}
            </Text>
          </Text>
        </View>
        <View style={styles.wrapInfo}>
          <Text>
            Số lượng ghế thường:{' '}
            <Text style={styles.textInfo}>{data.seat_basic_empty}</Text>
          </Text>
          <View style={styles.priceWrap}>
            <Text style={styles.priceText}>
              VND {data.seat_basic_value.toLocaleString('en-us')}
            </Text>
            <Text>/ghế</Text>
          </View>
        </View>
        <View style={styles.wrapInfo}>
          <Text>
            Số lượng ghế thương gia:{' '}
            <Text style={styles.textInfo}>{data.seat_vip_empty}</Text>
          </Text>
          <View style={styles.priceWrap}>
            <Text style={styles.priceText}>
              VND {data.seat_vip_value.toLocaleString('en-us')}
            </Text>
            <Text>/ghế</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
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
  wrapTime: {
    // width: 150,
    // display: 'flex',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  priceText: {
    color: '#F4601F',
  },
  priceWrap: {
    display: 'flex',
    flexDirection: 'row',
  },
});
