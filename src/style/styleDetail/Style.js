import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    imageS: {
        width: 340,
        height: 350,
        borderRadius: 10,
        resizeMode: 'stretch'
    },
    txtJudul: {
        fontSize: 30,
        fontFamily: 'Roboto',
        color: 'black'
    },
    txtPrice: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: 'black'
    },
    txtRating: {
        fontSize: 22,
        fontFamily: 'Roboto',
        color: 'black',
        marginLeft: 10
    },
    txtDesc : {
        fontSize: 17,
        fontWeight: '400',
        fontFamily : 'Poppins',
        color: 'black',
        marginVertical: 10
    },
    btn: {
        width: 350,
        height: 50,
        borderRadius: 18,
        elevation:3,
        backgroundColor: '#F68633',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnNot: {
        width: 350,
        height: 50,
        borderRadius: 18,
        elevation:3,
        backgroundColor: '#ff9e80',
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtBtn : {
        fontSize: 18,
        fontFamily: 'serif',
        color: 'white',
    },
    btnMinus : {
        backgroundColor: '#ECF0F6',
        height: 50,
        width: 100,
        borderRadius: 20,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnPlus : {
        backgroundColor: '#ECF0F6',
        height: 50,
        width: 100,
        borderRadius: 20,
        elevation: 4,
        justifyContent: 'center',
        alignItems: 'center'
    }
})