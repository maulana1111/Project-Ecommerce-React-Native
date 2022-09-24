import { View, Text, TouchableOpacity, FlatList, Image, ScrollView, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Style } from '../style/styleDetail/Style';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Chase } from 'react-native-animated-spinkit'
import axios from 'axios';
import Modal from "react-native-modal";

const Detail = ({ route }) => {

    const navigation = useNavigation();
    const [dataProduk, setDataProduk] = useState({});
    const [dataImage, setDataImage] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(0);
    const { data } = route.params;

    const _getProduct = async () => {
        try {
            axios.get("https://dummyjson.com/products/" + data)
                .then(
                    (res) => {
                        setDataProduk(res.data)
                        setDataImage(res.data.images)
                        // console.log(res.data.images)
                    }
                ).catch(
                    (err) => {
                        console.log(err.message)
                    }
                )
        } catch (error) {
            console.log(error.response.status);
        }
    }

    const addToCart = async () => {
        setLoading(true)
        axios.post('https://dummyjson.com/carts/add', {
            'userId': 2,
            'products': [
                {
                    'id': 4,
                    'quantity': 4
                }
            ]
        }).then(
            (res) => {
                console.log(res.data)
            }
        ).catch(
            (err) => {
                console.log(err.message)
            }
        )
        setLoading(false)
    }

    const add = () => {
        let num = count;
        num++;
        setCount(num)
    }
    const minus = () => {
        let num = count;
        num--;
        setCount(num)
    }

    const showAlert = () => {
        Alert.alert("Warning!", 'Masukan Jumlah Barang')
    }

    useEffect(() => {
        _getProduct()
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ marginVertical: 20 }}>
                        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => navigation.goBack()}>
                            <Icon name="arrow-back-outline" size={30} color="#000000" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Image
                            style={Style.imageS}
                            source={{ uri: dataProduk.thumbnail }}
                        />

                    </View>
                    <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
                        <Text style={Style.txtJudul}>
                            {dataProduk.title}
                        </Text>
                        <Text style={Style.txtDesc}>
                            {dataProduk.description}
                        </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={Style.txtPrice}>${dataProduk.price}</Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Icon name="star" size={28} color="gold" />
                                <Text style={Style.txtRating}>{dataProduk.rating}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ marginHorizontal: 30, marginVertical: 20 }}>
                        <View>
                            <Text style={Style.txtDesc}>Masukan Jumlah Barang</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            {
                                (count > 0)
                                    ?
                                    <TouchableOpacity style={Style.btnMinus} onPress={() => minus()}>
                                        <Icon name="remove-outline" size={30} color="#000000" />
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity style={Style.btnMinus}>
                                        <Icon name="remove-outline" size={30} color="#000000" />
                                    </TouchableOpacity>
                            }
                            <View style={{ paddingHorizontal: 40 }}>
                                <Text style={Style.txtDesc}>
                                    {count}
                                </Text>
                            </View>
                            <TouchableOpacity style={Style.btnPlus} onPress={() => add()}>
                                <Icon name="add-outline" size={30} color="#000000" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        {
                            (count > 0)
                                ?
                                <TouchableOpacity style={Style.btn} onPress={()=> addToCart()}>
                                    <Text style={Style.txtBtn}>
                                        Add To Cart
                                    </Text>
                                </TouchableOpacity>
                                :
                                <TouchableOpacity style={Style.btnNot} onPress={() => showAlert()}>
                                    <Text style={Style.txtBtn}>
                                        Add To Cart
                                    </Text>
                                </TouchableOpacity>
                        }
                    </View>
                    <Modal isVisible={loading}>
                        <View>
                            <Chase size={50} color='#FFF' />
                        </View>
                    </Modal>
                </View>
            </ScrollView>
        </View>
    );

}

export default Detail;