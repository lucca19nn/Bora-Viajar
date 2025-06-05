import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
const { width } = Dimensions.get('window');

export default function Post({ post }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const [commentModalVisible, setCommentModalVisible] = useState(false);
    const [commentsList, setCommentsList] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);

    const userPhoto = post?.foto
        ? `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${post.foto}`
        : 'https://cdn-icons-png.flaticon.com/512/17/17004.png';

    const userName = post?.usuario || 'Usuário';

    const handleFollow = () => setIsFollowing(!isFollowing);
    const handleLike = () => setLiked(!liked);

    const openComments = async () => {
        setCommentModalVisible(true);
        setLoadingComments(true);
        try {
            const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/comments/:id${post.id}`);
            console.log('Comments response:', response);
            console.log('Comments URL:', post);
            console.log(post.id);

            const data = await response.json();
            setCommentsList(data);
        } catch (e) {
            setCommentsList([]);
        }
        setLoadingComments(false);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={styles.profileImage}
                    source={{ uri: userPhoto }}
                />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{userName}</Text>
                    <Text style={styles.userHandle}>
                        {post?.user?.username ? '@' + post.user.username : '@username'}
                    </Text>
                </View>
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
                <TouchableOpacity onPress={openComments}>
                    <FontAwesome name="comment-o" size={24} color="black" />
                </TouchableOpacity>
                <FontAwesome name="share" size={24} color="black" />
                <TouchableOpacity onPress={() => setBookmarked(!bookmarked)}>
                    <FontAwesome
                        name={bookmarked ? "bookmark" : "bookmark-o"}
                        size={24}
                        color={bookmarked ? "#25C0C0" : "black"}
                    />
                </TouchableOpacity>
            </View>

            {/* MODAL DE COMENTÁRIOS */}
            <Modal
                visible={commentModalVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setCommentModalVisible(false)}
            >
                <View style={styles.overlay}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>Comentários</Text>
                        {loadingComments ? (
                            <Text>Carregando comentários...</Text>
                        ) : (
                            <FlatList
                                data={commentsList}
                                keyExtractor={(item, idx) => item.id?.toString() || idx.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.commentItem}>
                                        <Text style={styles.commentText}>{item.text}</Text>
                                    </View>
                                )}
                                style={{ maxHeight: 300 }}
                                ListEmptyComponent={<Text style={{color:'#aaa'}}>Nenhum comentário ainda.</Text>}
                            />
                        )}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={() => setCommentModalVisible(false)}
                        >
                            <Text style={{ color: '#25C0C0', fontWeight: 'bold' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
     overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        alignItems: 'stretch',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 12,
        alignSelf: 'center',
    },
    commentItem: {
        borderBottomWidth: 1,
        borderColor: '#eee',
        paddingVertical: 7,
    },
    commentText: {
        fontSize: 15,
        color: '#333',
    },
    closeButton: {
        alignSelf: 'center',
        marginTop: 18,
    },
});

