import React from 'react'
import { View, Text, Button } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../../theme/theme';

//la interfaz hereda del StackScreenProps
export interface StackNavigationInterface extends StackScreenProps<any, any>{}
//Destructuro la interfaz para obtener el navigation
export const Screen1 = ({navigation}: StackNavigationInterface) => {
  return (
    <View style={styles.container}>
        <Text>Screen1</Text>
        <Button title='ir al Screen 2' onPress={() => navigation.navigate('Screen2')}/>
        </View>
  );
};
