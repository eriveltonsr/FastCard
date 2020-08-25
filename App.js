
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginStack from './src/navigators/LoginStack'

import AddCardStack from './src/navigators/AddCardStack'

import Main from './src/screen/main/Main'

function App() {



  const Stack = createStackNavigator();

  return (
  
    <NavigationContainer>

    <LoginStack></LoginStack>
    <AddCardStack></AddCardStack>

    </NavigationContainer>
     
 

  )

}




export default App;
