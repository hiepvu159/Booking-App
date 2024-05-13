import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Navigation from './src/navigations/Navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

export default App;
