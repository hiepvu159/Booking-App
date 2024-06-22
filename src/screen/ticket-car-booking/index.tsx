import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { TicketCarModal } from '../../model/car.model';
import CardInfoTicketCar from './card-car-bought';
import { getTicketBoughtCar } from '../../api/booking-car.api';

export default function TicketCarBought() {
  const [listPlane, setListPlane] = useState<TicketCarModal[]>([]);

  useEffect(() => {
    getTicketBoughtCar()
      .then((res) => setListPlane(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane?.length ? (
          listPlane.map((item) => (
            <CardInfoTicketCar data={item} key={item.id} />
          ))
        ) : (
          <View>
            <Text style={{ color: '#000', fontSize: 20, textAlign: 'center' }}>
              No Data
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
