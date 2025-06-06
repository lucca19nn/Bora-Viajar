import react, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, TextInput, Modal, Text, TouchableOpacity, Image } from "react-native";
import Users from "../components/Users";
import PostPesquisa from "../components/PostPesquisa";
import axios from "axios";

const { width } = Dimensions.get("window");
const cardWidth = width - 40;

export default function Pesquisa() {
    const [usuarios, setUsuarios] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const url = `${process.env.EXPO_PUBLIC_API_URL}/users`;
                if (search) {
                    url += `?name=${encodeURIComponent(search)}`;
                }
                const response = await axios.get(url, {
                    headers: {
                        "x-api-key": process.env.EXPO_PUBLIC_API_KEY
                    }
                });
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    const fetchPostsByUser = async (userId) => {
        try {
            setLoading(true);
            const postsUrl = `${process.env.EXPO_PUBLIC_API_URL}/posts/${userId}`;
            const response = await fetch(postsUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': process.env.EXPO_PUBLIC_API_KEY,
                },
            });
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error(error);
            setPosts([]);
        } finally {
            setLoading(false);
        }
    };

    const renderItem = ({ item }) => (
        <View style={{ width, alignItems: "center" }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${item.photo}` }}
                    style={styles.headerImage}
                />
                <View style={styles.textOverlay}>
                    <Text style={styles.titleImage}>{item.name}</Text>
                    <Text style={styles.subtitle}>
                        {item.email ? `${item.name} - ${item.email}` : ""}
                    </Text>
                </View>
            </View>
        </View>
    );

    const closeModal = () => {
        setModalVisible(false);
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
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={[{ width: cardWidth }]}>
                        <Users
                            name={item.name}
                            email={item.email}
                            photo={item.photo}
                            onPress={async () => {
                                setSelectedUser(item);
                                await fetchPostsByUser(item.id); // Busca os posts do usuário selecionado
                                setModalVisible(true);
                            }}
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
                                    source={{ uri: `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${selectedUser.photo}` }} style={styles.imageModal}
                                />
                                <Text style={styles.titleModal}>{selectedUser.name}</Text>
                                <Text style={styles.subtitleModal}>Estado: {selectedUser.state}</Text>
                                <Text style={styles.subtitleModal}>Cidade: {selectedUser.city}</Text>
                                <Text style={styles.subtitleModal}>Tipo de Usuário: {selectedUser.type_user}</Text>
                                <Text style={styles.titleModal}>Posts:</Text>
                                <PostPesquisa
                                    posts={posts}
                                    loading={loading}
                                    fetchPostsByUser={fetchPostsByUser}
                                    userId={selectedUser.id}
                                    onClose={closeModal}
                                />
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
        width: "80%",
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
};