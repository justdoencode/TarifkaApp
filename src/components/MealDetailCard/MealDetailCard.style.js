import { Button, StyleSheet } from "react-native";



export default StyleSheet.create({
    conteiner:{
        flex:1,
        margin:10,
        backgroundColor:"#F2F2F2",
        padding:5,
    },
    image:{
        width:"100%",
        height:350,
        resizeMode:"contain",
    },
    title:{
        marginTop:20,
        fontWeight:"bold",
        fontSize:30,
    },
    line:{
        width:"100%",
        height:1,
        backgroundColor:"#BDBDBD",
    },
    button:{
        backgroundColor:"#FF0000",
        padding:5,
        borderRadius:5,
        marginTop:20,
        marginBottom:20,
    },
    button_title:{
        textAlign:"center",
        color:"white",
    }
})