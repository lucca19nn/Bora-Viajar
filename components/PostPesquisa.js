import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

function PostItem({ item }) {
    const [liked, setLiked] = useState(false);
    const [likesCount, setLikesCount] = useState(item.likes_count ?? 0);
    const [bookmarked, setBookmarked] = useState(false);
    const [commentModalVisible, setCommentModalVisible] = useState(false);
    const [commentsList, setCommentsList] = useState([]);
    const [loadingComments, setLoadingComments] = useState(false);

    const handleLike = () => {
        setLiked((prev) => {
            const newLiked = !prev;
            setLikesCount((count) => newLiked ? count + 1 : count - 1);
            return newLiked;
        });
    };

    const getCommentUserPhoto = (item) => {
        if (item?.foto_comentario) {
            return `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${item.foto_comentario}`;

        }
        return 'https://cdn-icons-png.flaticon.com/512/17/17004.png';
    };

    const handleBookmark = () => setBookmarked((prev) => !prev);

    const openComments = async () => {
        setCommentModalVisible(true);
        setLoadingComments(true);

        const postId = item.id;

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
            {item?.tag && (
                <TouchableOpacity
                    style={[
                        styles.alertButton,
                        item.tag === 'ALERTA' && { backgroundColor: '#f8d7da' },
                        item.tag === 'NOVIDADES' && { backgroundColor: '#fff3cd' },
                        (item.tag === 'PROMOÇÃO' || item.tag === 'PROMO€ÇO') && { backgroundColor: '#d4edda' },
                    ]}
                >
                    <Text style={[
                        styles.alertButtonText,
                        item.tag === 'ALERTA' && { color: '#721c24' },
                        item.tag === 'NOVIDADES' && { color: '#856404' },
                        (item.tag === 'PROMOÇÃO' || item.tag === 'PROMO€ÇO') && { color: '#155724' },
                    ]}>
                        {item.tag}
                    </Text>
                </TouchableOpacity>
            )}
            <Text style={styles.postContent}>{item.description || "Sem descrição"}</Text>
            {item.image && (
                <Image
                    style={styles.postImage}
                    source={{ uri: `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${item.image}` }}
                />
            )}
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

export default function PostPesquisa({ posts, loading }) {
    if (loading) return <Text>Carregando...</Text>;
    if (!posts || posts.length === 0) return <Text>Nenhum post encontrado.</Text>;

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => <PostItem item={item} />}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: width * 0.025,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    postContent: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
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
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: "90%",
        maxHeight: 400,
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#25c0c0",
        textAlign: "center",
    },
    commentItem: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
        paddingBottom: 8,
    },
    userComment: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 4,
    },
    profileImageComment: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 8,
    },
    commentText: {
        fontSize: 14,
        color: "#333",
    },
    closeButton: {
        alignSelf: 'center',
        marginTop: 18,
    },
});