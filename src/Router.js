import React from "react";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "./pages/Categories/Categories";
import Meals from "./pages/Meals/Meals";
import MealDetail from "./pages/MealDetail/MealDetail";


const Stack=createNativeStackNavigator();
const Router= () =>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="CategoriesPage" component={Categories} options={{
          title:"CATEGORIES",
          headerTitleStyle:{color:"#FFA500"},
          headerTitleAlign:"center"
        }}/>
        <Stack.Screen name="MealsPage" component={Meals} options={{
          title:"MEALS",
          headerTitleStyle:{color:"#FFA500"},
          headerTitleAlign:"center",
          headerTintColor:"#FFA500"
        }}/>
        <Stack.Screen name="MealDetailPage" component={MealDetail} options={{
          title:"MEAL DETAIL",
          headerTitleStyle:{color:"#FFA500"},
          headerTitleAlign:"center",
          headerTintColor:"#FFA500"
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;