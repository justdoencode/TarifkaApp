import React from "react";
import { Alert, Image, Linking, Text,ToastAndroid,TouchableOpacity,View } from "react-native";
import styles from "./MealDetailCard.style";




const MealDetailCard = ({meal}) =>{

    const openLink=()=>{
        Linking.openURL(meal.strYoutube).catch((err) =>ToastAndroid.show("Video Bulunamadı",ToastAndroid.LONG))
    }
    return(
        <View style={styles.conteiner}>
            <Image style={styles.image} source={{uri:meal.strMealThumb}}/>
            <Text style={styles.title}>{meal.strMeal}</Text>
            <View style={styles.line}></View>
            <Text>{meal.strInstructions}</Text>
            <TouchableOpacity onPress={openLink}>
                <View style={styles.button}>
                    <Text style={styles.button_title}>Watch On YouTube</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default MealDetailCard;