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
import Norte from "./pages/pesquisa/regioes/Norte";
import Nordeste from "./pages/pesquisa/regioes/Nordeste";
import Sudeste from "./pages/pesquisa/regioes/Sudeste";
import Sobre from "./pages/Sobre";

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
          name="Sobre nós"
          component={Sobre}
          options={{ headerShown: false, title: "Sobre nós" }}
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
        <Stack.Screen
          name="Norte"
          component={Norte}
          options={{ headerShown: false, title: "Norte" }}
        />
        <Stack.Screen
          name="Nordeste"
          component={Nordeste}
          options={{ headerShown: false, title: "Nordeste" }}
        />
        <Stack.Screen
          name="Sudeste"
          component={Sudeste}
          options={{ headerShown: false, title: "Sudeste" }}
        />
      </Stack.Navigator>

    </NavigationContainer>

  );
}