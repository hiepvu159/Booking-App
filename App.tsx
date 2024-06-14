import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigations/Navigation';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
      <Toast />
    </NavigationContainer>
  );
}

export default App;
