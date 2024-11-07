import { Dimensions, Image, StyleSheet } from "react-native";


const windowWidth=Dimensions.get("window").width;
export default StyleSheet.create({
    conteiner:{
        alignItems:"center",
        margin:10,
        flex:1,
    },
    image:{
        width:"100%",
        height:"100%",
        justifyContent:"flex-end",
        resizeMode:"contain",
    },
    image_conteiner:{
        width:"100%",
        height:150,
        borderRadius:25,
        overflow:"hidden",
    },
    title_border:{
        backgroundColor:"rgba(0,0,0,0.7)",
        height:30,
        width:"100%",
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
    },
    title_conteiner:{
        width:"100%",
        height:"100%",
        position:"absolute",
        paddingRight:7,
        paddingLeft:5,
    },
    title:{
        opacity:1,
        color:"white",
        textAlign:"right",
        fontWeight:"bold",
    }

})