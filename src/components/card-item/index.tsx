import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import StepIndicator from 'react-native-step-indicator';
// import { StepIndicatorStyles } from 'react-native-step-indicator/lib/typescript/src/types';

// const customStyles: StepIndicatorStyles = {
//   stepIndicatorSize: 20,
//   currentStepIndicatorSize: 20,
//   separatorStrokeWidth: 1,
//   stepIndicatorLabelFontSize: 0,
//   stepStrokeWidth: 0,
//   currentStepStrokeWidth: 0,
//   currentStepIndicatorLabelFontSize: 0,
//   stepIndicatorCurrentColor: '#6a6b6a',
//   stepIndicatorUnFinishedColor: '#6a6b6a',
//   stepIndicatorFinishedColor: '#6a6b6a',
//   stepStrokeCurrentColor: '#6a6b6a',
//   stepStrokeFinishedColor: '#6a6b6a',
//   stepStrokeUnFinishedColor: '#6a6b6a',
//   separatorFinishedColor: '#6a6b6a',
//   separatorUnFinishedColor: '#6a6b6a',
// };

export default function CardItem() {
  const { navigate } = useNavigation();
  return (
    <View
      style={styles.container}
      onTouchStart={() => navigate('InfoPlane' as never)}>
      <Text style={styles.textInfo}>VietNam Airline</Text>
      <View style={styles.wrapInfo}>
        <View>
          <View style={styles.wrapTime}>
            <Text style={styles.textInfo}>08:00</Text>
            <Text style={styles.textInfo}> - </Text>
            <Text style={styles.textInfo}>10:00 </Text>
            <Text style={styles.textInfo}>• 1 điểm dừng</Text>
          </View>
        </View>
        <View style={styles.priceWrap}>
          <Text style={styles.priceText}>VND 5.000.000</Text>
          <Text>/khách</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
  },
  wrapInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  textInfo: {
    color: 'black',
  },
  wrapTime: {
    width: 150,
    display: 'flex',
    flexDirection: 'row',
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
