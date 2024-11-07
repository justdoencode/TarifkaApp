import { StyleSheet } from "react-native";


export default StyleSheet.create({
    conteiner:{
        flex:1,
        backgroundColor:"#ECEFF1",
        margin:6,
        padding:5,
        flexDirection:"row",
        alignItems:"center",
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50,
        height:100,
        borderColor:"#BCAAA4",
        borderWidth:2,
    },
    image:{
        width:75,
        minHeight:70,
        resizeMode:"contain",
        marginRight:10,
        marginLeft:10,
        backgroundColor:"#ECEFF1"
        
        
    },
    title:{
        fontSize:25,
    },
})