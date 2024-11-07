import React from "react";
import { Image, Text, TouchableOpacity, TouchableWithoutFeedback, View } from "react-native";
import styles from "./CategoryCard.style";


const CategoryCard= ({category, onSelect}) =>{
    return(
        <TouchableOpacity onPress={onSelect}>
            <View style={styles.conteiner}>
            <Image style={styles.image} source={{uri:category.strCategoryThumb}}/>
            <Text style={styles.title}>{category.strCategory}</Text>
        </View>
        </TouchableOpacity>
        
    )
}


export default CategoryCard;