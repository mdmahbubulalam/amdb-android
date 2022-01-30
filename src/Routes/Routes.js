/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../components/Home/Home';
import Details from '../components/Details/Details';
const Stack = createNativeStackNavigator();

const Routes = () => {   
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home"  component={Home} />
                <Stack.Screen name="Details"  component={Details} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;