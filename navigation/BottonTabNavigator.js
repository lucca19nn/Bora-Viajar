import React from "react"; 
import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Home from "../pages/Home";
import Filtro from "../pages/Filtro"; 
import Icon from "react-native-vector-icons/Ionicons";
import logobora from "../assets/logobora.png";
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator(); 

export default function TabNavigation() {
    const navigation = useNavigation();

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: true,
                headerTitle: () => (
                    <Image
                        source={logobora}
                        style={{
                            width: 150,
                            height: 150,
                            resizeMode: "contain"
                        }}
                    />
                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate("Sobre")}>
                        <Image
                            source={{
                                uri: "https://lh3.googleusercontent.com/chat_attachment/AP1Ws4vn-lpOeUcOTKUCFyKN7CyO5U0nU44NM98-tyylHdJVSLF27D0o8SuicfapfMqCpuMf6eJYk1Gp0AP59eCSqZQC5rvPs8IUMQCoD_b2Se7LCz_d62kXWKdMTIoUuZFqZ7-LqwKMyTDu68Zkdh6_2mwrzD0r6yhoFSwRg2TDYQMjvcWpO4nNceLZBHh5CY2P7TmUr0KYz3eSSC9XKwlIShUdkvCqNMVfDtVGJQcVpN6wjTiWpcIAZCjDFh0GEY6PfQgO5Bze0jv_L6DVi3cvvYbWywPTb7QY2HQ8RtFulDuFbBaFSnFM8lOHXCuLLTZhWt0=w680-h639"
                            }}
                            style={{
                                width: 39,
                                height: 39,
                                margin: 20,
                                resizeMode: "contain"
                            }}
                        />
                    </TouchableOpacity>
                ),
                headerStyle: {
                    backgroundColor: "#ffffff",
                    height: 110,
                    borderBottomWidth: 2,
                    borderBottomColor: "#25C0C0",
                },
                headerTitleAlign: "center",
                headerTintColor: "#f7f7f7",
                headerTitleStyle: {
                    fontSize: 30,
                    fontWeight: "bold",
                    alignItems: "center",
                },
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "#25C0C0",
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 70,
                    paddingBottom: 0,
                    zIndex: 10,
                    borderTopWidth: 1,
                    borderTopColor: "#e0e0e0",
                    borderTopLeftRadius: 60,
                    borderTopRightRadius: 60,
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                },
                tabBarIconStyle: {
                    marginTop: 15,
                    marginBottom: 5,
                },
                tabBarActiveTintColor: "white",
                tabBarInactiveTintColor: "white",
            }}
        >
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
