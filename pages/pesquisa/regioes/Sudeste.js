import React from "react";
import { Text, View, Image, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity  } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Sul(){
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Image source={require("../../../assets/logo.png")} style={styles.logo} />
                    <Text style={styles.text}>Bem-vindo à região Sudeste!</Text>
                </View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                    <Text style={styles.buttonText}>Voltar ao Filtro</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        marginVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
        resizeMode: "contain",
    },
    text: {
        fontSize: 18,
        textAlign: "center",
        margin: 10,
    },
    button: {
        backgroundColor: "#00bcd4",
        padding: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});