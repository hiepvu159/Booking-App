import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { TicketCarModal } from '../../model/car.model';
import CardInfoTicketCar from './card-car-bought';
import { getTicketBoughtCar } from '../../api/booking-car.api';

const data_fake: TicketCarModal[] = [
  {
    id: 123123,
    name: 'AirPlane',
    start_location: 'HA NOI',
    end_location: 'HCM',
    time: new Date(),
    buyer_id: 113,
    car_travel_id: 123123,
    contact_with_name: 'gege',
    seat_number: 10,
    ticket_value: 15000000,
    contact_with_phone: '123123123',
  },
];
export default function TicketCarBought() {
  const [listPlane, setListPlane] = useState<TicketCarModal[]>(data_fake);

  useEffect(() => {
    getTicketBoughtCar()
      .then((res) => setListPlane(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        {listPlane.map((item) => (
          <CardInfoTicketCar data={item} key={item.id} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
});
