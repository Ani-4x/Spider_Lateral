import React from 'react';
import { View } from 'react-native';
import Messenger from './components/Messenger';
import Login from './components/account/Login';
import AppNavigation from './navigation/appNavigation';
import HomeScreen from './components/account/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';
import ChatScreen from './components/account/ChatScreen';


const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {

  return (
    <NavigationIndependentTree>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login"
            component={Login} 
            options={{headerShown:false}}/>
          

          <Stack.Screen name="HomeScreen"
            component={HomeScreen}
            options={{headerShown:false}} />
          <Stack.Screen name="ChatScreen"
            component={ChatScreen}
            options={{headerShown:false}} />


        </Stack.Navigator>
      </NavigationContainer>
    </NavigationIndependentTree>
  )

};

export default App;

