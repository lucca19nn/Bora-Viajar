import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro";
import Inicial from "./pages/Inicial";
import Tab from "./navigation/BottonTabNavigator";
import Filtro from "./pages/Filtro";
import Sul from "./pages/pesquisa/regioes/Sul";
import Centro from "./pages/pesquisa/regioes/Centro";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false, title: "Login" }}
        />
        <Stack.Screen
          name="Cadastro"
          component={Cadastro}
          options={{ headerShown: false, title: "Cadastro" }}
        />
        <Stack.Screen
          name="Inicial"
          component={Inicial}
          options={{ headerShown: false, title: "Inicial" }}
        />
        <Stack.Screen
          name="Home"
          component={Tab}
          options={{ headerShown: false, title: "Home" }}
        />
        <Stack.Screen
          name="Filtro"
          component={Filtro}
          options={{ headerShown: false, title: "Filtro" }}
        />
        <Stack.Screen
          name="Sul"
          component={Sul}
          options={{ headerShown: false, title: "Sul" }}
        />
        <Stack.Screen
          name="Centro"
          component={Centro}
          options={{ headerShown: false, title: "Centro" }}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}