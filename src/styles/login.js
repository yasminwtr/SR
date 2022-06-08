import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#3d4379',
        height:2000,
    },
    container2: {
        justifyContent:'center',
        alignItems:'center',
        margin:150,
    },
    title: {
        color:'#3d4379',
        fontSize:20,
        alignSelf:'center',
        marginTop:60,
        marginBottom:30
    },
    textInput: {
        margin: 16, 
        width:300,
        borderRightWidth:0.5,
        borderLeftWidth:0.5,
        borderBottomWidth:0.5,
        borderRadius:31, borderTopWidth:0.5,
        borderColor:'#bababa',
        backgroundColor:'#fff',

    },
    buttonLogin: {
        backgroundColor:'#3d4379',
        padding:10,
        borderRadius:30,
        margin:'5%',
    },
    buttonRegister:{
        backgroundColor:'#3d4379',
        padding:10,
        borderRadius:30,
        margin:'5%',
        height:50,
        marginTop:30
    },
    checkbox: {
        marginTop:2,
        flexDirection: "row",
        marginBottom: 5,
        alignItems:'center'
    },
    btnNavigate: {
        textAlign:'center',
    },
    boxContainerLogin:{
        backgroundColor: '#f3f8fe',
        borderRadius:10,
        height:500,
        // shadowColor:'#0000',
        // elevation: 50
    },
    boxContainerRegister:{
        backgroundColor: '#f3f8fe',
        borderRadius:10,
        height:600,
        // shadowColor:'#0000',
        // elevation: 50
    },
    textNavigate:{
        marginTop:20,
        textAlign:'center'
    }
})