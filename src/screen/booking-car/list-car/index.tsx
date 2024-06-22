import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CardItemCar from '../card-item';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigations/Navigation';
import { CarModel } from '../../../model/car.model';
import { getListCatApi } from '../../../api/booking-car.api';

export default function ListCar() {
  const { params } = useRoute<RouteProp<RootStackParamList, 'ListCar'>>();
  const [listCar, setListCar] = useState<CarModel[]>([]);

  useEffect(() => {
    getListCatApi({
      start_location: params.addressFrom,
      end_location: params.addressTo,
      start_time: params.dateFrom,
    }).then((res) => setListCar(res.data));
  }, [params]);

  return (
    <View style={styles.container}>
      {listCar?.length ? (
        listCar.map((item) => <CardItemCar data={item} key={item.id} />)
      ) : (
        <View>
          <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
            Car travel not found
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
