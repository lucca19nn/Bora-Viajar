import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Cadastro = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const navigation = useNavigation();

    const handleCadastro = () => {
        if (senha.length < 6) {
            Alert.alert("Erro", "A senha deve ter no minimo 6 caracteres.");
            return;
        }
        if (senha !== confirmarSenha) {
            Alert.alert("Erro", "As senhas não coincidem.");
            return;
        }
        console.log('Nome:', nome);
        console.log('Email:', email);
        console.log('Senha:', senha);

        navigation.navigate('Login');
    };

    return (
        <ImageBackground
            source={require("../assets/Rj-C.jpg")}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.loginBox}>
                    <Text style={styles.title}>Cadastre-se</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                        placeholderTextColor="White"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                        placeholderTextColor="White"
                    />
                    <View style={styles.row}>
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            placeholder="Cidade"
                            placeholderTextColor="White"
                        />
                        <TextInput
                            style={[styles.input, styles.halfInput]}
                            placeholder="Estado"
                            placeholderTextColor="White"
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                        value={senha}
                        onChangeText={setSenha}
                        secureTextEntry
                        placeholderTextColor="White"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Confirmar Senha"
                        value={confirmarSenha}
                        onChangeText={setConfirmarSenha}
                        secureTextEntry
                        placeholderTextColor="White"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                        <Text style={styles.buttonText}>Cadastrar-se</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

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
        color: "#333",
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
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
    },
    halfInput: {
        flex: 1,
        marginHorizontal: 5,
    }
});

export default Cadastro;