import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, TextInput } from "react-native";
import Users from "../components/Users";

const { width } = Dimensions.get("window");
const cardWidth = width - 40;

export default function Home() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://10.88.199.170:3000/api/users"
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
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar usuários..." 
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
                            // onPress={() => {/* ação ao clicar, se quiser */}
                        />
                    </View>
                )}
            />
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
};