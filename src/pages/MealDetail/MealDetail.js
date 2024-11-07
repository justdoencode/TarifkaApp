
import React from "react";
import { FlatList, Image, Text,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useFetch from "../../hooks/useFetch";
import Config from "react-native-config";
import MealDetailCard from "../../components/MealDetailCard/MealDetailCard"

const MealDetail = ({route}) =>{

    const {meal}=route.params;
    const {data,loading,error}=useFetch(Config.MEAL_DETAIL_API + meal);

    const renderMealDetail = ({item})=> <MealDetailCard meal={item}/>
    return(
        
        <View>
            <FlatList data={data.meals} renderItem={renderMealDetail}/>
        </View>
    )
}

export default MealDetail;