import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:40
    },
    title: {
        color:'#563d7d',
        fontWeight:'bold',
        fontSize:30,
        marginTop:'40%',
        marginBottom:'15%',
    },
    titleInput: {
        margin: 10,
        marginRight: '60%',
        fontSize: 14,
    },
    textInput: {
        margin: 16, 
        width:300,
        borderRightWidth:0.5,
        borderLeftWidth:0.5,
        borderBottomWidth:0.5,
        borderRadius:31, borderTopWidth:0.5,
        borderColor:'#fff',
        backgroundColor:'#fff',
        shadowColor:'# 52006A',
        elevation: 10
    },
    button: {
        backgroundColor:'#3e4685',
        padding:10,
        borderRadius:30,
        width:'90%',
        margin:'5%',
        height:60,
    },
})