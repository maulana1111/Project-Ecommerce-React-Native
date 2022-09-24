import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import SplashScreen from './screen/SplashScreen';
import Login from './screen/Login';
import Home from './screen/Home';
import ProductByCategory from './screen/ProductByCategory';
import Detail from './screen/Detail';

const Route = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
                <Stack.Screen name='SplashScreen' component={SplashScreen}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Detail' component={Detail}/>
                <Stack.Screen name='ProductByCategory' component={ProductByCategory}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Route;