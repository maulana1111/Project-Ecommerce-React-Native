import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    BContainer: {
        paddingVertical: 10,
        backgroundColor: '#181818',
        borderTopWidth: 1,
        borderTopColor: '#bdbdbd',
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25
    },
    BtnContainer : {
        justifyContent: 'center', 
        alignItems: 'center',
    },
    BtnItem : {
        backgroundColor: '#2F2F2F', 
        paddingHorizontal: 20,
        paddingVertical: 7, 
        flexDirection:'row', 
        justifyContent:'center', 
        borderRadius:20
    }
})