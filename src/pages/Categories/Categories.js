import React, { useState } from "react";
import { ActivityIndicator, FlatList, SafeAreaView, Text, View } from "react-native";
import CategoryCard from "../../components/CategoryCard/CategoryCard"

import Config from "react-native-config";
import useFetch from "../../hooks/useFetch";
import axios from "axios";

import styles from "./Categories.style"


const Categories = ({navigation}) =>{
   
  const {loading,error,data}=useFetch(Config.CATEGORIES_API);
  if(loading){
      return <ActivityIndicator size="large" />
  }
  if(error){
      return <Text>{error}</Text>
  }
  const handleCategorySelect = (category) =>{
    return navigation.navigate("MealsPage",{category})
  }
  const renderCategory=({item})=><CategoryCard category={item} onSelect={()=> handleCategorySelect(item.strCategory)} />
  return(
      <SafeAreaView style={styles.conteiner}>
          <FlatList data={data.categories} renderItem={renderCategory}/>
      </SafeAreaView>
  )
}

export default Categories