import React from "react";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./MealCard.style";


const MealCard = ({meal,onSelect}) =>{
    return(
        <TouchableOpacity onPress={onSelect}>
            <View style={styles.conteiner}>
             <View style={styles.image_conteiner}>
                 <ImageBackground style={styles.image} source={{uri:meal.strMealThumb}}>
                     <View style={styles.title_border}>
                          <View style={styles.title_conteiner}>
                                <Text numberOfLines={1}  style={styles.title}>{meal.strMeal}</Text>
                         </View>
                     </View>
                    
                    </ImageBackground>
             </View>
            
            </View>
        </TouchableOpacity>
        
    )
        
    
}

export default MealCard;


    
                    