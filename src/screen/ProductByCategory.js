import { View, Text, Image, TouchableOpacity, } from 'react-native'
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import { Swing } from 'react-native-animated-spinkit'
import axios from 'axios';
import { FlatGrid } from 'react-native-super-grid';
import Header from '../component/Header';
import { Style } from '../style/styleHome/Style';
import CardProduct from '../component/CardProduct';

const ProductByCategory = ({ route }) => {

    const [dataProduk, setDataProduk] = useState([]);
    const [loading, setLoading] = useState(false)
    const { data } = route.params;

    let uri = 'https://dummyjson.com/products/category/' + data;

    // console.log(uri);

    const _getProduct = async () => {
        try {
            axios.get(uri)
                .then(
                    (res) => {
                        setDataProduk(res.data.products)
                    }
                ).catch(
                    (err) => {
                        console.log(err.message)
                    }
                )
        } catch (error) {
            console.log(err.response.status);
        }
    }

    // _getProduct();
    useEffect(() => {
        setLoading(true)
        _getProduct()
        setLoading(false)
    }, []);

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <Header category='Smartphone' />
            {
                (!loading)
                    ?
                    <View>
                        <FlatGrid
                            style={{ marginBottom: 50 }}
                            data={dataProduk}
                            itemDimension={130}
                            renderItem={({ item }) =>
                                <View>
                                    <CardProduct item={item} />
                                </View>
                            }
                        />
                    </View>
                    :
                    <View style={Style.fIcon}>
                        <Swing size={50} color='#FFF' />
                    </View>
            }

        </View>
    );
}


export default ProductByCategory;