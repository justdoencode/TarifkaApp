import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import { ActivityIndicator, FlatList, Text } from "react-native";

import MealCard from "../../components/MealCard/MealCard";
import styles from "./Meals.style";



const Meals = ({route,navigation}) =>{

    const {category}=route.params
    const {data,loading,error}=useFetch(Config.MEALS_API + category)


    if(error){
       return <Text>{error}</Text>
    }
    if(loading){
       return <ActivityIndicator size={"large"}/>
    }

    const handleMealSelect = (meal) =>{
        return navigation.navigate("MealDetailPage",{meal});
    }

    const renderMeal=({item})=><MealCard meal={item} onSelect={()=>handleMealSelect(item.strMeal)} />
    return(
        <SafeAreaView style={styles.conteiner}>
            <FlatList data={data.meals} renderItem={renderMeal}/>
        </SafeAreaView>
    )
}


export default Meals;