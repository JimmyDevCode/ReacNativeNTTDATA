import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { Screen1 } from '../screens/screen1/Screen1';
import { Screen2 } from '../screens/screen2/Screen2';
import { Screen3 } from '../screens/screen3/Screen3';

//crear una constante
const Stack = createStackNavigator();

export const StackNavigation = () => {
    return (
        //se retorna un jsx (componente de vista)
         //componente y nombre que sean iguales (lo recomendable)
        <Stack.Navigator>
            <Stack.Screen name="Screen1" component={Screen1} />
            <Stack.Screen name="Screen2" component={Screen2} />
            <Stack.Screen name="Screen3" component={Screen3} />
        </Stack.Navigator>

    );
};