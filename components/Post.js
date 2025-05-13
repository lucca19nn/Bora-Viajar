import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Post({ post }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: post?.photo }}
                />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{post?.name}</Text>
                    <Text style={styles.userHandle}>{post?.username || '@username'}</Text>
                </View>
            </View>
            <Text style={styles.postContent}>
                {post?.description || "No description available"}
            </Text>
            {post?.tag && (
                <TouchableOpacity style={styles.alertButton}>
                    <Text style={styles.alertButtonText}>{post?.tag}</Text>
                </TouchableOpacity>
            )}
            {post?.image ? (
                <View style={styles.imagesContainer}>
                    <Image
                        style={styles.postImage}
                        source={{ uri: post?.image }}
                    />
                </View>
            ) : null}
            <View style={styles.iconContainer}>
                <FontAwesome name="heart-o" size={24} color="black" />
                <FontAwesome name="comment-o" size={24} color="black" />
                <FontAwesome name="share" size={24} color="black" />
                <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '188%',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 3,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    userDetails: {
        flex: 1,
    },
    userName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    userHandle: {
        fontSize: 14,
        color: '#666',
    },
    postContent: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    alertButton: {
        backgroundColor: '#FF0000',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    alertButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    imagesContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
});