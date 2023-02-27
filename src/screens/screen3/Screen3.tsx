import React from 'react'
import { View,Text,Button} from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../../theme/theme';

export interface StackNavigationInterface extends StackScreenProps<any, any> {}

export const Screen3 = ({navigation}: StackNavigationInterface) => {
  return (
    <View style={styles.container}>
      <Text>Screen3</Text>
      <Button
      title='Regresar'
      onPress={() => navigation.goBack()}/>

    {/* regresar al comienzo de la pantalla */}
      <Button
      title='Ir al Screen 1'
      onPress={() => navigation.popToTop()}/>
    </View>
  );
};
