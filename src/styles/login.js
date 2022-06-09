import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'#f9f9f9',
        height:'100%',
    },
    container2: {
        justifyContent:'center',
        alignItems:'center',
        margin:150,
    },
    title: {
        color:'black',
        fontSize:20,
        alignSelf:'center',
        marginTop:60,
        marginBottom:30
    },
    textInput: {
        backgroundColor:'#f9f9f9',
        borderColor: "gray",
        width: 300,
        margin: 6,
        borderRadius:5
    },
    buttonLogin: {
        backgroundColor:'#ff9796',
        padding:10,
        borderRadius:30,
        margin:'5%',
    },
    buttonRegister:{
        backgroundColor:'#ff9796',
        padding:10,
        borderRadius:30,
        margin:'5%',
        height:50,
        marginTop:90
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
    // boxContainerLogin:{
    //     backgroundColor: '#f3f8fe',
    //     borderRadius:10,
    //     height:500,
    //     // shadowColor:'#0000',
    //     // elevation: 50
    // },
    boxContainerRegister:{
        borderRadius:10,
        height:600,
        // shadowColor:'#0000',
        // elevation: 50
    },
    textNavigate:{
        marginTop:10,
        textAlign:'center',
        color:'#7abcdb'
    }
})