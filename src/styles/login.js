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
    textNavigate:{
        marginTop:10,
        textAlign:'center',
        color:'#7abcdb'
    },
    errorMessage:{
        textAlign:'center',
        marginTop:5
    }

})