import React from "react"; 
import { Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from "../pages/Home";
import Filtro from "../pages/Filtro"; 
import Mapa from "../pages/Mapa";
import Icon from "react-native-vector-icons/Ionicons";
import logobora from "../assets/logobora.png";
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator(); 

export default function TabNavigation() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Sobre'); 
      };

    return (
        <Tab.Navigator
        initialRouteName='Home'
        screenOptions={{
            headerShown: true,
            headerTitle: () => (
                <Image
                    source={logobora}
                    style={{ width: 150, height: 150, alignItems: "center", resizeMode: "contain" }}
                    />
            ),
            headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Sobre')}>
                <Image
                    source={{ uri: "https://lh3.googleusercontent.com/chat_attachment/AP1Ws4vn-lpOeUcOTKUCFyKN7CyO5U0nU44NM98-tyylHdJVSLF27D0o8SuicfapfMqCpuMf6eJYk1Gp0AP59eCSqZQC5rvPs8IUMQCoD_b2Se7LCz_d62kXWKdMTIoUuZFqZ7-LqwKMyTDu68Zkdh6_2mwrzD0r6yhoFSwRg2TDYQMjvcWpO4nNceLZBHh5CY2P7TmUr0KYz3eSSC9XKwlIShUdkvCqNMVfDtVGJQcVpN6wjTiWpcIAZCjDFh0GEY6PfQgO5Bze0jv_L6DVi3cvvYbWywPTb7QY2HQ8RtFulDuFbBaFSnFM8lOHXCuLLTZhWt0=w680-h639" }} 
                    style={{ width: 40, height: 40, margin: 15, resizeMode: "contain" }}
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
                backgroundColor: '#25C0C0', // Cor de fundo visível
                position: 'fixed', // Fixar o tab bar na parte inferior
                bottom: 0, // Garantir que ele esteja no final da tela
                left: 0,
                right: 0,
                height: 60, // Altura consistente
                zIndex: 10, // Garantir que esteja acima de outros elementos
                borderTopWidth: 1, // Linha superior para separação
                borderTopColor: '#e0e0e0', // Cor da linha superior
                borderTopLeftRadius: 60, // Bordas arredondadas
                borderTopRightRadius: 60, // Bordas arredondadas
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
        }}>
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
                    headerShown: true,
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

// Icon name="compass"
// Icon name="location"
// Icon name="navigate"
// Icon name="location-sharp"
// Icon name="location-outline"