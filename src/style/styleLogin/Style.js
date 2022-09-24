import { StyleSheet } from "react-native";

export const Style = StyleSheet.create({
    FContainer : {
        flex: 1, 
        backgroundColor: '#F6DDCF'
    },
    txtJudul : {
        fontSize: 48,
        color: 'white',
        fontWeight:'bold',
        marginVertical: 30
    },
    SContainer : {
        alignItems: 'center',
        backgroundColor: '#F6DDCF'
    },
    TextInpuTStyle: {
        color: '#ffffff',
        backgroundColor: '#F68633',
        marginHorizontal: 20,
        marginVertical: 20,
        paddingLeft: 10,
        borderRadius: 6,
        elevation: 8
    }, 
    stylButton : {
        flexDirection:'row',
        justifyContent:'space-around',
        marginVertical: 20,
    },
    btn : {
        backgroundColor: '#F68633',
        width: 180,
        overflow: 'hidden',
        borderRadius: 10,    
        elevation: 8,
        padding: 13,
    },
    txtBtn : {
        textAlign: "center",
        fontSize: 17,
        fontWeight: '600',
        color: 'white'
    },
});