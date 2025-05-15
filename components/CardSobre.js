import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking } from "react-native";

export default function CardSobre({ name, age, image, link }) {
    const handleLinkPress = async () => {
        if (link) {
            const supported = await Linking.canOpenURL(link);
            if (supported) {
                await Linking.openURL(link);
            } else {
                console.log("Não foi possível abrir o link: " + link);
            }
        }
    };

    return (
        <View style={styles.card}>
            <View style={styles.imageContainer}>
                {image ? (
                    <Image source={image} style={styles.image} />
                ) : (
                    <View style={styles.placeholderImage} />
                )}
                    <TouchableOpacity style={styles.linkButton} onPress={handleLinkPress}>
                    <Image
                        source={require("../assets/linkedinicon.png")}
                        style={styles.buttonImage}
                    />
                </TouchableOpacity>

            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.age}>{age}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: "90%",
        height: 400,
        borderRadius: 15,
        backgroundColor: "#fff",
        marginBottom: 20,
        alignSelf: "center",
        overflow: "hidden",
        elevation: 5,
    },
    imageContainer: {
        height: "70%",
        backgroundColor: "#ccc",
        position: "relative", // Necessário para posicionamento absoluto do botão
    },
    image: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
    },
    placeholderImage: {
        height: "100%",
        width: "100%",
        backgroundColor: "#ccc",
    },
    linkButton: {
        position: "absolute",
        top: 1,
        right: 1,
        backgroundColor: "transparent", // Remove cor de fundo
        padding: 5,
        borderRadius: 5,
        zIndex: 10,
    },
    linkText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "bold",
    },
    infoContainer: {
        padding: 20,
        alignItems: "center",
        justifyContent: "flex-start",
        height: "30%",
    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#333",
        marginTop: -5,
    },
    age: {
        fontSize: 17,
        color: "#666",
        marginBottom: 15,
        textAlign: "justify"
    },
});