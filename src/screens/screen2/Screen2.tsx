import React from 'react'
import { View, Text, Button} from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../../../theme/theme';

export interface StackNavigationInterface extends StackScreenProps<any, any>{}

export const Screen2 = ({navigation}: StackNavigationInterface) => {
  return (
    <View style={styles.container}>
        <Text>Screen 2</Text>
        <Button title="ir al Screen 3" onPress={() => navigation.navigate('Screen3')}
        />
    </View>
  )
}
