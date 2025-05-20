import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export default function Post({ post }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const handleFollow = () => {
        setIsFollowing(!isFollowing);
    };
    const handleLike = () => setLiked(!liked);

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
                {/* Botão Seguir no canto superior direito */}
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
            <TouchableOpacity onPress={handleLike}>
                <FontAwesome
                    name={liked ? "heart" : "heart-o"}
                    size={24}
                    color={liked ? "red" : "black"}
                />
            </TouchableOpacity>
                <FontAwesome name="comment-o" size={24} color="black" />
                <FontAwesome name="share" size={24} color="black" />
            <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
                <FontAwesome
                    name={bookmarked ? "bookmark" : "bookmark-o"}
                    size={24}
                    color={bookmarked ? "#25C0C0" : "black"}
                    />
                    </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width * 0.95,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: width * 0.025,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        position: 'relative',
    },
    followButton: {
        position: 'absolute',
        right: 0,
        top: 0,
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