import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";

export default function Login({ navigation }) {
    const [password, setPassword] = React.useState("");
    
    const handleLogin = () => {
        if (password.length < 6) {
            Alert.alert("Erro", "A senha deve ter no minimo 6 caracteres.");
        } else {
            navigation.navigate("Home");
        }
    };
    return (
        <ImageBackground 
        source={require("../assets/teste.jpg")} 
        style={styles.background}
    >
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Bem Vindo!</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome ou email"
                        placeholderTextColor="White"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        placeholderTextColor="White"
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    /> 
                    <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}>
                        <Text style={styles.linkText}>Não tem uma conta? Crie já</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Inicial")}>
                        <Text style={styles.buttonText}>ENTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%", 
        height: "100%", 
        resizeMode: "cover"
    },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    loginBox: {
        width: "90%",
        padding: 20,
        backgroundColor: "rgba(255, 255, 255, 0.49)", 
        borderRadius: 25,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
        color: "#333",
    },
    input: {
        width: "100%",
        height: 50,
        backgroundColor: "rgba(255, 255, 255, 0.36)",
        borderRadius: 20,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: "rgba(255, 255, 255, 0.38)",
    },
    button: {
        width: "100%",
        height: 50,
        backgroundColor: "#00C4B4",
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 10,
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
    linkText: {
        marginTop: 15,
        color: "#007BFF",
        fontSize: 14,
        textDecorationLine: "underline",
    },
});