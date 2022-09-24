import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../style/styleHome/Style';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const CardProduct = (props) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={Style.itemProduct}
            onPress={() => navigation.navigate('Detail', { data: props.item.id })}
        >
            <View>
                <Image style={Style.imgItemProduk} source={{ uri: props.item.images[0] }} />
                <View style={{ marginVertical: 10 }}>
                    <Text>{props.item.title}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                    <Text style={{
                        fontWeight: 'bold',
                        color: 'black',
                        fontSize: 14,
                    }}>
                        ${props.item.price}
                    </Text>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 10
                    }}>
                        <Icon name="star" size={20} color="gold" />
                        <Text style={{
                            marginTop: 2,
                            marginLeft: 3,
                            color: 'black',
                            fontSize: 12
                        }}>
                            {props.item.rating}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default CardProduct;