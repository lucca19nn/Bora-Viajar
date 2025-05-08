import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Card = ({ title, description, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
        <ImageBackground source={{ uri: image }} style={styles.image} imageStyle={styles.imageStyle}>
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
        height: 120,
        borderRadius: 10,
        marginVertical: 10,
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
        alignSelf: "flex-end",
        padding: 10,
    },
});

export default Card;