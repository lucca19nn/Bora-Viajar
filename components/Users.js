import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
const { width } = Dimensions.get('window');

export default function Users({ name, email, photo, onPress }) {
    const [isFollowing, setIsFollowing] = useState(false);
    let imageSource;
    if (photo) {
        imageSource = { uri: `http://10.88.200.160:3000/uploads/${photo}` };
    } else {
        imageSource = require("../assets/userProfile.jpg");
    }

    const handleFollow = () => setIsFollowing((prev) => !prev);

    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image
                source={imageSource}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subtitle}>{email}</Text>
                <TouchableOpacity
                    style={[
                        styles.followButton,
                        { backgroundColor: isFollowing ? '#1b9999' : '#25C0C0' }
                    ]}
                    onPress={handleFollow}
                >
                    <Text style={styles.followButtonText}>
                        {isFollowing ? 'Seguindo' : 'Seguir'}
                    </Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flex: 1,
        width: 370,
        flexDirection: "row",
        alignItems: "center",
        height: 120,
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
        fontSize: 16,
        fontWeight: "bold",
        color: "#000000",
        textAlign: "left",
    },
    subtitle: {
        fontSize: 14,
        color: "#000000",
        textAlign: "left",
    },
    followButton: {
        position: 'absolute',
        right: 0,
        bottom: 40,
        zIndex: 2,
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 14,
    },
    followButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
});