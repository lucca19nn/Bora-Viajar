import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const CardFiltro = ({ title, description, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <ImageBackground
                source={{ uri: image }}
                style={styles.image}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{description}</Text>
                </View>
                <View style={styles.iconContainer}>
                    <MaterialIcons name="arrow-forward" size={24} color="#fff" />
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "100%", 
        height: 150, 
        borderRadius: 10,
        marginVertical: 8, 
        overflow: "hidden",
    },
    image: {
        flex: 1,
        justifyContent: "space-between",
    },
    imageStyle: {
        borderRadius: 10,
    },
    textContainer: {
        padding: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
    },
    subtitle: {
        fontSize: 14,
        color: "#fff",
    },
    iconContainer: {
        position: "absolute", 
        bottom: 10,
        right: 10,
        backgroundColor: "rgba(0, 0, 0, 0.5)", 
        borderRadius: 20,
        padding: 5,
    },
});

export default CardFiltro;
