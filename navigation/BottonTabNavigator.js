import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Mapa from "../pages/Mapa";
import Home from "../pages/Home";
import Pesquisa from "../pages/Pesquisa";
import Filtro from "../pages/Filtro";
import Icon from "react-native-vector-icons/Ionicons";
import logobora from "../assets/logobora.png";
import { useNavigation } from '@react-navigation/native';
import sobre from "../assets/sobre.png";

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
                            source={sobre}
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
                    borderBottomColor: "#25c0c0",
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
                    backgroundColor: "#25c0c0",
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
                name="Pesquisa"
                component={Pesquisa}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="search" color={color} size={size} />
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
            <Tab.Screen 
                name="Mapa" 
                component={Mapa} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Icon name="navigate" color={color} size={size} />
                    ),
                    headerShown: true,
                }}
            />
        </Tab.Navigator>
    );
}
