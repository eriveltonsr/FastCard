import React from 'react';
import { View,StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



import LoginScreen from '../screen/login/LoginScreen';
import AddCard from '../screen/addCard/AddCard';
import MainScreen from '../screen/main/Main';


const Stack = createStackNavigator();

const LoginStack = () => {
    return (

       
        <Stack.Navigator>
          
           
            
            <Stack.Screen

                name="LoginScreen"
                component={LoginScreen}
                options={{ headerShown: false }}
            />
          
            <Stack.Screen

                name="AddCard"
                component={AddCard}
                options={{
                    title: 'Add Cards',
                    headerTintColor: '#0F151D',

                }}
            />



                
     
            <Stack.Screen

                name="MainScreen"
                component={MainScreen}
                options={{ headerShown: false }}

            />

        


        </Stack.Navigator>


    )
}

export default LoginStack;