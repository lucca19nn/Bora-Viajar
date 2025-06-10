import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, TextInput, Modal, Text, TouchableOpacity, Image, ActivityIndicator } from "react-native";
import Users from "../components/Users";
import PostPesquisa from "../components/PostPesquisa";

const { width } = Dimensions.get("window");
const cardWidth = width - 40;

export default function Pesquisa() {
    const [usuarios, setUsuarios] = useState([]);
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [posts, setPosts] = useState([]);
    const [loadingPosts, setLoadingPosts] = useState(false);
        const [isFollowing, setIsFollowing] = useState(false);

        const handleFollow = () => setIsFollowing((prev) => !prev);

    // BUSCA USUÁRIOS
    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = `${process.env.EXPO_PUBLIC_API_URL}/users`;
                if (search) {
                    url += `?name=${encodeURIComponent(search)}`;
                }
                const response = await fetch(url, {
                    headers: {
                        "x-api-key": process.env.EXPO_PUBLIC_API_KEY
                    }
                });
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        };

        fetchData();
    }, [search]);

    // ABRE MODAL E BUSCA POSTS
    const openModalWithUser = async (user) => {
        setSelectedUser(user);
        setModalVisible(true);
        setLoadingPosts(true);
        try {
            const response = await fetch(
                `${process.env.EXPO_PUBLIC_API_URL}/posts?user_id=${user.id}`,
                {
                    headers: {
                        "x-api-key": process.env.EXPO_PUBLIC_API_KEY,
                        "Content-Type": "application/json"
                    }
                }
            );
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setPosts([]);
            console.error("Erro ao buscar posts:", error);
        } finally {
            setLoadingPosts(false);
        }
    };

    // FECHA MODAL
    const closeModal = () => {
        setModalVisible(false);
        setSelectedUser(null);
        setPosts([]);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar usuários..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                style={styles.verticalList}
                data={usuarios}
                vertical
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ width: cardWidth }}>
                        <Users
                            name={item.name}
                            email={item.email}
                            photo={item.photo}
                            onPress={() => openModalWithUser(item)}
                        />
                    </View>
                )}
            />
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={closeModal}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        {selectedUser && (
                            <>
                                <Image
                                    source={{ uri: `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${selectedUser.photo}` }}
                                    style={styles.imageModal}
                                />
                                <Text style={styles.titleModal}>{selectedUser.name}</Text>
                                <Text style={styles.subtitleModal}>Estado: {selectedUser.state}</Text>
                                <Text style={styles.subtitleModal}>Cidade: {selectedUser.city}</Text>
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
                                {loadingPosts ? (
                                    <ActivityIndicator size="large" color="#25c0c0" />
                                ) : (
                                    <PostPesquisa
                                        posts={posts}
                                        loading={loadingPosts}
                                        userId={selectedUser.id}
                                        onClose={closeModal}
                                    />
                                )}
                            </>
                        )}
                        <TouchableOpacity
                            style={styles.closeButton}
                            onPress={closeModal}
                        >
                            <Text style={{ color: '#25C0C0', fontWeight: 'bold' }}>Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        width: "100%",
    },
    searchInput: {
        height: 50,
        borderColor: "#25c0c0",
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 20,
        color: "#25c0c0",
        fontSize: 16,
        backgroundColor: "#ffffff",
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center"
    },
    modalContent: {
        width: "90%",
        maxHeight: "90%", 
        backgroundColor: "#ffffff",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
    },
    imageModal: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    titleModal: {
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#25c0c0",
        textAlign: "center",
    },
    subtitleModal: {
        fontSize: 16,
        marginBottom: 10,
    },
    button: {
        backgroundColor: "#25c0c0",
        color: "#ffffff",
        padding: 10,
        borderRadius: 5,
        textAlign: "center",
        width: "100%",
        marginTop: 20,
    },
    verticalList: {
        width: "100%",
        paddingHorizontal: 10,
    },
    followButton: {
        paddingVertical: 6,
        paddingHorizontal: 18,
        borderRadius: 14,
        margin: 5,
    },
    followButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 14,
    },
};