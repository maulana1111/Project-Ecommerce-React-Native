import React, { useState, useEffect } from 'react';
import { View, Text, StatusBar, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../style/styleBottom/Style';

const BottomMenu = (props) => {

    const [active, setActive] = useState(props.screenName);
    const navigation = useNavigation();

    return (

        <View style={Style.BContainer}>
            <TouchableOpacity style={Style.BtnContainer}
                onPress={() => navigation.navigate('DaftarKata')}
            >
                {
                    (active == "Cart")
                        ?
                        <View style={Style.BtnItem}>
                            <Icon name='cart-outline' size={30} color='#fff' />
                            <Text style={{ fontSize: 13, color: 'white' }}>Cart</Text>
                        </View>
                        :
                        <View>
                            <Icon name='cart-outline' size={30} color='grey' />
                        </View>
                }
            </TouchableOpacity>
            <TouchableOpacity style={Style.BtnContainer}
                onPress={() => navigation.navigate('Home')}
            >
                {
                    (active == "Home")
                        ?
                        <View style={Style.BtnItem}>
                            <Icon name='home-outline' size={30} color='#fff' />
                            <Text style={{ fontSize: 13, color: 'white', marginTop: 6, marginLeft: 7 }}>Home</Text>
                        </View>
                        :
                        <View>
                            <Icon name='home-outline' size={30} color='grey' />
                        </View>
                }
            </TouchableOpacity>
            <TouchableOpacity style={Style.BtnContainer}
                onPress={() => navigation.navigate('Profile')}
            >
                {
                    (active == "profile")
                        ?
                        <View style={Style.BtnItem}>
                            <Icon name='person-outline' size={30} color='#fff' />
                            <Text style={{ fontSize: 13, color: 'white' }}>Profile</Text>
                        </View>
                        :
                        <View>
                            <Icon name='person-outline' size={30} color='grey' />
                        </View>
                }
            </TouchableOpacity>
        </View>
    );
}

export default BottomMenu;
