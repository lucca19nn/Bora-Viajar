import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Card = ({ title, description, image, onPress }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image source={{ uri: image }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        width: 180,
        height: 230, 
        backgroundColor: "#25c0c0",
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 8, 
        overflow: "hidden",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 120,
    },
    textContainer: {
        padding: 10,
        alignItems: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
    },
    subtitle: {
        marginTop: 5,
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },
});

export default Card;
