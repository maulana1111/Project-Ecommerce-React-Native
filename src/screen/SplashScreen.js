import { View, Text, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Swing } from 'react-native-animated-spinkit'
import { Style } from '../style/styleSplashScreen/Style';
import { StackActions } from '@react-navigation/native';


const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(StackActions.replace('Login'))
        }, 3000);
    }, []);

    return(
        <View style={Style.FContainer}>
            <View style={Style.SContainer}>
                <Swing size={50} color='#FFF'/>
                <Text style={Style.txt}>
                    Jelajahi Produk Terbaru Kami
                </Text>
            </View>
        </View>
    );
}

export default SplashScreen;