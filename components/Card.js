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
        width: 150,
        height: 200, 
        backgroundColor: "#00bcd4",
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 8, 
        overflow: "hidden",
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 100,
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
        fontSize: 14,
        color: "#fff",
        textAlign: "center",
    },
});

export default Card;
