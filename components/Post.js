import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Post({ post }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: post ? post.photo : "photo"}} 
                />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{post ? post.name : "name"}</Text>
                    <Text style={styles.userHandle}>@username</Text>
                </View>
            </View>
            <Text style={styles.postContent}>
            {post ? post.description : "description"}
            </Text>

            <TouchableOpacity style={styles.alertButton}>
                <Text style={styles.alertButtonText}>{post ? post.tag : "tag"}</Text>
            </TouchableOpacity>

            <View style={styles.imagesContainer}>
                <Image
                    style={styles.postImage}
                    source={{ uri: post ? post.image1 : "image1"}}
                />
                <Image
                    style={styles.postImage}
                    source={{ uri: post ? post.image2 : "image2"}}
                />
            </View>

            <View style={styles.iconContainer}>
                <FontAwesome name="heart-o" size={24} color="black" />
                <FontAwesome name="comment-o" size={24} color="black" />
                <FontAwesome name="share" size={24} color="black" />
                <FontAwesome name="bookmark-o" size={24} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '188%',
        height: 'auto',
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 10,
        margin: 10,
        boxShadow: '#000',
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
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    postImage: {
        width: '48%',
        height: 100,
        borderRadius: 8,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
});