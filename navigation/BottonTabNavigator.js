import React from "react"; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from "../pages/Home";
import Filtro from "../pages/pesquisa/Filtro"; 
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator(); 

export default function TabNavigation() {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen 
                name="Home" 
                component={Home} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="home" color={color} size={size} />
                    ),
                }}
            />         
            <Tab.Screen 
                name="Filtro" 
                component={Filtro} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="location-sharp" color={color} size={size} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

// Icon name="compass"
// Icon name="location"
// Icon name="navigate"
// Icon name="location-sharp"
// Icon name="location-outline"