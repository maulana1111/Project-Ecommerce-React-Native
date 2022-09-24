import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    searchBar: {
        backgroundColor: '#F8F8F8',
        borderRadius: 7,
        elevation: 3,
        marginHorizontal: 30,
        marginVertical: 20,
        flexDirection: 'row',
    },
    fIcon: {
        justifyContent: 'center',
        marginHorizontal: 10
    },
    txtCat: {
        fontWeight: 'bold',
        color: 'black',
        marginLeft: 30,
        fontSize: 16,
        fontFamily: "Cochin"
    },
    CCategory: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    ICategory: {
        backgroundColor: '#F6DDCF',
        padding: 5,
        marginHorizontal: 10,
        borderRadius: 4,
        elevation: 3,
        margin: 2
    },
    txtItemCat: {
        fontSize: 16,
        fontWeight: '600',
        color: 'black'
    },
    itemProduct: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgItemProduk: {
        height: 160,
        width: 130,
        borderRadius: 15,
        marginTop: 5
    },
    HContainer: {
        backgroundColor: '#fefeff',
        paddingVertical: 15,
        elevation: 3,
    },
    txtCatH: {
        fontSize: 17,
        fontWeight: '600',
        color: 'black',
        fontFamily: "sans-serif-medium",
        marginTop: 3,
        marginLeft: 10
    }
})