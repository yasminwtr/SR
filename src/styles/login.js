import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        // flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:100
    },
    title: {
        color:'#3e4685',
        fontWeight:'bold',
        fontSize:30,
        marginTop:'10%',
        marginBottom:'15%',
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
    checkbox: {
        marginTop:2,
        flexDirection: "row",
        marginBottom: 5,
        alignItems:'center',
        // alignContent:'center'
    },
    btnNavigate: {
        textAlign:'center',
    },
    svg: {
        alignContent:"flex-end"
    }
})