import React from 'react';

import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import AddCardS from '../screen/addCard/AddCard';




const Stack = createStackNavigator();

const AddCardStack = () => {
    return (


        
            <Stack.Screen

                name="AddCard"
                component={AddCardS}
                options={{
                    title: 'Add Cards',
                    headerTintColor: '#0F151D',

                }}
            />

        


    )
}

export default AddCardStack;