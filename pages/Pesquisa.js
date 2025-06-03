import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, TextInput, Modal, Text, TouchableOpacity, Image } from "react-native";
import Users from "../components/Users";

const { width } = Dimensions.get("window");
const cardWidth = width - 40;

export default function Pesquisa() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = "http://10.88.199.140:3000/api/users";
                if (search) {
                    url += `?name=${encodeURIComponent(search)}`;
                }
                const response = await fetch(
                    url,
                    {
                        headers: {
                            "x-api-key": "B0raV1@j@2025"
                        }
                    }
                );
                const data = await response.json();
                setUsuarios(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    const renderItem = ({ item }) => (
        <View style={{ width, alignItems: "center" }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: `http://10.88.199.170:3000/uploads/${item.photo}` }}
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
                            onPress={() => {
                                setSelectedUser(item);
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
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContent}>
                        {selectedUser && (
                            <>
                                <Image
                                    source={{ uri: `http://10.88.199.170:3000/uploads/${selectedUser.photo}` }} style={styles.imageModal}
                                />
                                <Text style={styles.titleModal}>{selectedUser.name}</Text>
                                <Text style={styles.subtitleModal}>{selectedUser.email}</Text>
                                <Text style={styles.subtitleModal}>{selectedUser.state}</Text>
                                <Text style={styles.subtitleModal}>{selectedUser.city}</Text>
                                <Text style={styles.subtitleModal}>{selectedUser.type_user}</Text>
                            </>
                        )}
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                            <Text style={styles.button}>Fechar</Text>
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
        width: 100, 
        height: 100, 
        borderRadius: 50, 
        marginBottom: 20 ,
    },
    titleModal: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#25c0c0",
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