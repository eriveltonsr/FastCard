import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import MainScreen from '../screen/main/Main';




const Stack = createStackNavigator();

const MainStack = () => {
    return (
        

       
            <Stack.Screen

                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}

            />

     


    )
}

export default MainStack;