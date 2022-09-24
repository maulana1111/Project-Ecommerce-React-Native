import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react';
import { Chase } from 'react-native-animated-spinkit'
import { Style } from '../style/styleLogin/Style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';


const Login = ({ navigation }) => {

    const [username, setUsername] = useState();
    const [password, setPassowrd] = useState();

    const [loading, setLoading] = useState(false);
    const [dataUser, setDataUser] = useState({});

    const _tekan = async () => {
        // if(!username && !password)
        // {
        //     Alert.alert('Warning!', 'Username Atau Password Tidak Boleh Kosong');
        // }        
        setLoading(true);
        try {
            const postData = await axios.post('https://dummyjson.com/auth/login', {
                username: "kminchelle",
                password: "0lelplR"
            })
            setDataUser(postData.data)
            // console.log(dataUser.id);
            try {
                await AsyncStorage.setItem('id', dataUser['id'].toString());
            } catch (errr) {
                console.log(errr.message)
            }
            // const getD = await AsyncStorage.getItem('id');
            // console.log(getD);
        } catch (err) {
            console.log(err.response.status);
            if (err.response.status == 400) {
                Alert.alert('Warning!', "Password / Username Salah")
            }
        }
        setLoading(false)
    }


    return (
        <View style={Style.FContainer}>
            <View style={Style.SContainer}>
                <Text style={Style.txtJudul}>Login</Text>
            </View>
            <View>
                <TextInput
                    style={Style.TextInpuTStyle}
                    placeholder='Masukan Username'
                    placeholderTextColor={'#ffffff'}
                    onChangeText={username => setUsername(username)}
                />
                <TextInput
                    style={Style.TextInpuTStyle}
                    placeholder='Masukan Password'
                    placeholderTextColor={'#ffffff'}
                    onChangeText={password => setPassowrd(password)}
                />

                <View style={Style.stylButton}>
                    <TouchableOpacity
                        style={Style.btn}
                        onPress={() => _tekan()}
                    >
                        <Text style={Style.txtBtn}>Log In</Text>
                    </TouchableOpacity>
                </View>
                {
                    (loading == true) 
                    ?
                    <View style={{marginTop: 15, alignItems:'center'}}>
                        <Chase size={50} color='#FFF' />
                    </View>
                    :
                    <View></View>
                }


            </View>
        </View>
    );
}

export default Login;