import { View, Text, Image, TextInput, TouchableOpacity, StatusBar, } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../style/styleHome/Style';

const Header = (props) => {
    const navigation = useNavigation();

    return (
        <View style={Style.HContainer}>
            <StatusBar barStyle="light-content" backgroundColor={'#fbfdff'} />
            <View style={{flexDirection:'row',}}>
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline" size={30} color="#000000" />
                </TouchableOpacity>
                <View>
                    <Text style={Style.txtCatH}>
                        Category : {props.category}
                    </Text>
                </View>
            </View>
        </View>
    );

}


export default Header;