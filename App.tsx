import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/navigation/StackNavigation';

const App = () => {
  return (
    //llamamos al stack
    //un navigation container necesita un stack
    //el stacknavigation no necesita de un hijo
    <NavigationContainer>
      <StackNavigation/>
    </NavigationContainer>
  );
};

export default App;

/*import {Text, View} from 'react-native'
import { StackNavigation } from './src/navigation/StackNavigation';
export const App = () => {
  return (
   <View style ={{
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center'
   }}>
    <Text style={{
      fontSize: 45,
      textAlign: 'center'
    }}>Hola Mundo</Text>
   </View>
  );
};

export default App;*/

