import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image} from "react-native";

export default function Inicial({ navigation }) {
    return (
        <ImageBackground
            source={require("../assets/Rj-C.jpg")} 
            style={styles.background}
        >
            <View style={styles.container}>
                <Image
                    source={require("../assets/logo.png")}
                    style={styles.logo}
                />

                <View style={styles.textBox}>
                    <Text style={styles.title}>Bem vindo ao Bora!</Text>
                    <Text style={styles.subtitle}>Qual seu próximo destino?</Text>
                    <Text style={styles.description}>
                        No Bora, você encontra destinos incríveis, experiências únicas e dicas valiosas para planejar sua próxima aventura.
                    </Text>
                    <Text style={styles.footerText}>
                        Entre agora e deixe o mundo te surpreender!
                    </Text>
                </View>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("Home")}
                >
                    <Text style={styles.buttonText}>{"\u2794"}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 50,
    },
    logo: {
        width: 200, 
        height: 200, 
        resizeMode: "contain", 
        marginTop: 20,
    },
    textBox: {
        backgroundColor: "rgba(0, 196, 180, 0.9)",
        padding: 20,
        borderRadius: 15,
        alignItems: "center",
        width: "90%",
        marginTop: 100,
        marginBottom: 25,
    },
    title: {
        fontSize: 26,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },
    subtitle: {
        fontSize: 16,
        color: "white",
        marginTop: 5,
        textAlign: "center",
    },
    description: {
        fontSize: 14,
        color: "white",
        marginTop: 10,
        textAlign: "center",
        lineHeight: 18,
    },
    button: {
        width: 60,
        height: 60,
        backgroundColor: "white",
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        position: "absolute", 
        bottom: 13, 
        zIndex: 1, 
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 24,
        color: "#00C4B4", 
        fontWeight: "bold",
    },
    footerText: {
        fontSize: 14,
        color: "white",
        marginTop: 10,
        textAlign: "center",
        fontWeight: "bold",
    },
});