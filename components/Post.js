import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions, Modal, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Post({ post }) {
    const [isFollowing, setIsFollowing] = useState(false);
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);

    const [likesCount, setLikesCount] = useState(post.likes_count ?? 0);

    const [commentModalVisible, setCommentModalVisible] = useState(false);
    const [commentsList, setCommentsList] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);

    const userPhoto = post?.foto
        ? `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${post.foto}`
        : 'https://cdn-icons-png.flaticon.com/512/17/17004.png';

    const getCommentUserPhoto = (item) => {
        if (item?.foto_comentario) {
            return `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${item.foto_comentario}`;

        }
        return 'https://cdn-icons-png.flaticon.com/512/17/17004.png';
    };

    const userName = post?.usuario || 'Usuário';

    const handleFollow = () => setIsFollowing((prev) => !prev);
    const handleLike = () => {
        setLiked((prev) => {
            const newLiked = !prev;
            setLikesCount((count) => newLiked ? count + 1 : count - 1);
            return newLiked;
        });
    };
    const handleBookmark = () => setBookmarked((prev) => !prev);

    const openComments = async () => {
        setCommentModalVisible(true);
        setLoadingComments(true);

        const postId = post.id;

        if (!postId) {
            setCommentsList([]);
            setLoadingComments(false);
            return;
        }

        try {
            const url = `${process.env.EXPO_PUBLIC_API_URL}/comments/${postId}`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.EXPO_PUBLIC_API_KEY,
                },
            });
            const data = await response.json();
            console.log('RESPOSTA DA API:', JSON.stringify(data, null, 2));

            setCommentsList(data.comment ? [data.comment] : []);
        } catch (e) {
            setCommentsList([]);
        }
        setLoadingComments(false);
    };

    const closeComments = () => setCommentModalVisible(false);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.profileImage} source={{ uri: userPhoto }} />
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>{userName}</Text>
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
            {post?.tag && (
                <TouchableOpacity
                    style={[
                        styles.alertButton,
                        post.tag === 'ALERTA' && { backgroundColor: '#f8d7da' }, 
                        post.tag === 'NOVIDADES' && { backgroundColor: '#fff3cd' },
                        (post.tag === 'PROMOÇÃO' || post.tag === 'PROMO€ÇO') && { backgroundColor: '#d4edda' },
                    ]}
                >
                    <Text style={[
                        styles.alertButtonText,
                        post.tag === 'ALERTA' && { color: '#721c24' },
                        post.tag === 'NOVIDADES' && { color: '#856404' },
                        (post.tag === 'PROMOÇÃO' || post.tag === 'PROMO€ÇO') && { color: '#155724' },
                    ]}>
                        {post.tag}
                    </Text>
                </TouchableOpacity>
            )}
            {/* Conteúdo do post */}
            <Text style={styles.postContent}>
                {post?.description || "Sem descrição disponível"}
            </Text>
            {post?.image && (
                <View style={styles.imagesContainer}>
                    <Image
                        style={styles.postImage}
                        source={{ uri: `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${post.image}` }}
                    />
                </View>
            )}
            {/* Ícones */}
            <View style={styles.iconContainer}>
                <TouchableOpacity onPress={handleLike} style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FontAwesome
                        name={liked ? "heart" : "heart-o"}
                        size={24}
                        color={liked ? "red" : "black"}
                    />
                    <Text style={{ marginLeft: 6, fontSize: 15 }}>
                        {likesCount}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={openComments}>
                    <FontAwesome name="comment-o" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={handleBookmark}>
                    <FontAwesome
                        name={bookmarked ? "bookmark" : "bookmark-o"}
                        size={24}
                        color={bookmarked ? "#25C0C0" : "black"}
                    />
                </TouchableOpacity>
            </View>
            <Modal
                visible={commentModalVisible}
                animationType="slide"
                transparent
                onRequestClose={closeComments}
            >
                <View style={styles.overlay}>
                    <View style={styles.modal}>
                        <Text style={styles.title}>Comentários</Text>
                        {loadingComments ? (
                            <Text>Carregando comentários...</Text>
                        ) : (
                            <FlatList
                                data={commentsList}
                                keyExtractor={(item, idx) => idx.toString()}
                                renderItem={({ item }) => (
                                    <View style={styles.commentItem}>
                                        <View style={styles.userComment}>
                                            <Image
                                                style={styles.profileImageComment}
                                                source={{ uri: getCommentUserPhoto(item) }}
                                            />
                                            <Text style={{ fontWeight: 'bold' }}>{item.usuario || 'Usuário'} </Text>
                                        </View>
                                        <Text style={styles.commentText}> {item.comentario} </Text>
                                    </View>
                                )}

                                style={{ maxHeight: 300 }}
                                ListEmptyComponent={<Text style={{ color: '#aaa' }}>Nenhum comentário ainda.</Text>}
                            />
                        )}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeComments}
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
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    alertButtonText: {
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
    userComment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    profileImageComment: {
        width: 35,
        height: 35,
        borderRadius: 15,
        marginRight: 10,
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