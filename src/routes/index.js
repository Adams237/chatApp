import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from '../screens/tabs';
import MessageDetail from '../screens/messageDetail';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown:false }}>
            <Stack.Screen name="home" component={BottomTabs}/>
            <Stack.Screen name="messageDetails" component={MessageDetail} options={{headerShown:true}}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
