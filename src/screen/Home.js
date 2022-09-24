import { View, Text, Image, TextInput, TouchableOpacity, Alert, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Style } from '../style/styleHome/Style';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import axios from 'axios';
import { FlatGrid } from 'react-native-super-grid';
import { useNavigation } from '@react-navigation/native';
import BottomMenu from '../component/BottomNav';
import CardProduct from '../component/CardProduct';

const Home = () => {
    const [dataProduk, setProduk] = useState([]);
    const [dataSearch, setDataSearch] = useState([]);
    const [dataCategory, setDataCategory] = useState([]);
    const [search, setSearch] = useState('');
    const navigation = useNavigation();

    const _getCategory = async () => {
        // const getCat = await axios.get('https://dummyjson.com/products/categories');
        // setDataCategory(getCat.data)
        axios.get('https://dummyjson.com/products/categories')
            .then(
                (res) => {
                    setDataCategory(res.data)
                }
            ).catch(
                (err) => {
                    console.log(err.message)
                }
            )
    }

    const _getProduct = async () => {
        axios.get('https://dummyjson.com/products')
            .then(
                (res) => {
                    setProduk(res.data.products)
                    setDataSearch(res.data.products)
                    // console.log(res.data.products)
                }
            ).catch(
                (err) => {
                    console.log(err.message)
                }
            )
    }

    useEffect(() => {
        _getCategory();
        _getProduct();
    }, []);

    useEffect(() => {
        setDataSearch(_search(dataProduk, search))
    }, [search]);


    function _search(array, string) {
        return array.filter(key =>
            Object.keys(key).some(value =>
                key[value].toString().toUpperCase().includes(string.toUpperCase())))
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={Style.searchBar}>
                <View style={Style.fIcon}>
                    <Icon name="search-outline" size={30} color="#000000" />
                </View>
                <View>
                    <TextInput
                        placeholder='Temukan Sesuatu'
                        placeholderTextColor="grey"
                        onChangeText={text => setSearch(text)}
                        value={search}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View>
                    <Text style={Style.txtCat}>Category</Text>
                </View>
                <View style={Style.CCategory}>
                    <FlatList
                        data={dataCategory}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) =>
                            <TouchableOpacity style={Style.ICategory} onPress={() =>
                                navigation.navigate("ProductByCategory", { data: item }
                                )}>
                                <Text>{item}</Text>
                            </TouchableOpacity>
                        }
                    />
                </View>
                <View>
                    <Text style={Style.txtCat}>All Products</Text>
                </View>
                <View>
                    <FlatGrid
                        style={{ marginBottom: 100 }}
                        data={dataSearch}
                        itemDimension={130}
                        renderItem={({ item }) =>
                            <View>
                                <CardProduct item={item} />
                            </View>
                        }

                    />
                </View>
            </View>
            <BottomMenu screenName={'Home'} />
        </View>
    );

}



export default Home;