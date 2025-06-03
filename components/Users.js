import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function Users ({ name, email, photo, onPress }) {

    let imageSource;
    if (photo) {
        imageSource = { uri: `http://10.88.199.140:3000/uploads/${photo}` };
    } else {
        imageSource = require("../assets/userProfile.jpg"); 
    }

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={ imageSource }
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{email}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        width: 370,
        height: 100,
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 8,
        overflow: "hidden",
        padding: 10,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 16,
        backgroundColor: "#25c0c0",
    },
    textContainer: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "left",
    },
    subtitle: {
        fontSize: 16,
        color: "#000000",
        textAlign: "left",
    },
});