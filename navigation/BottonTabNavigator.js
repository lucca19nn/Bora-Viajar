import React from "react"; 
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"; 
import Home from "../pages/Home";
import Filtro from "../pages/Filtro"; 
import Icon from "react-native-vector-icons/Ionicons";
import logobora from "../assets/logobora.png";


const Tab = createBottomTabNavigator(); 

export default function TabNavigation() {
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
                <Image
                    source={{ uri: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png" }} 
                    style={{ width: 60, height: 60, resizeMode: "contain" }}
                />
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
        </Tab.Navigator>
    );
}

// Icon name="compass"
// Icon name="location"
// Icon name="navigate"
// Icon name="location-sharp"
// Icon name="location-outline"